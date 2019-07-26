# Hybrid 类的使用

## 绑定

Hybrid 中封装了会用到的 SuperWebviewSDK 中的方法，便于在 web 页面中使用，也便于后期维护。web 项目初始化时，需将 Hybrid 类的实例绑定到 Vue 上。每个页面中，在通过 this.\$h 来调用具体的交互方法。

::: warning 注意
对于未封装在 Hybrid 类中的方法，如需使用，请告知项目前端管理人员，参照已封装的方法的书写规范，由专人将需要的方法封装到 Hybrid 类中，并更新文档。
:::

```js
// 将 Hybrid 类实例绑定到Vue上
const hybrid = new Hybrid({ options });
Vue.prototype.$h = hybrid.apiCloud;
```

## apiready

此事件是在 api 对象准备完毕后产生，在每个 web 模块中代码中都需要监听此事件，以确定 APICloud 扩展对象已经准备完毕，可以调用了。如 sessionId、权限、数据字典此类数据，都可在这个方法中获取，并存储到 store 中，以供 web 模块使用。

```js
/* 使用 */

this.$h.apiready(() => {
    // 业务逻辑代码
    ...
})
```

```js
/* Hybrid */

apiready(callback) {
    window.apiready = function() {
        callback()
    }
}
```

## 打开新的 web 模块

项目约定，每个 web 模块，用一个新的 frame 承载。当需要跳转到下一 web 模块时，调用 openFrame 方法。url 可以为远程地址，也可以为本地模块资源名称。

```js
/* 使用 */

// 打开新frame
this.$h.openFrame("app", "http://www.baidu.com");
or;
this.$h.openFrame("app", "login");

// 关闭frame
this.$h.closeFrame("app");
```

```js
/* Hybrid */

openFrame(name, url) {
    // 获取缓存起来的安全区域大小
    let safeArea = api.getPrefs({
        sync: true,
        key: 'safeArea'
    })

    if (safeArea) {
        safeArea = JSON.parse(safeArea)
    } else {
        safeArea = { top: 0, left: 0, bottom: 0, right: 0 }
    }

    // 判断是网络资源还是本地资源
    let URL = url
    if (url.indexOf(http) === -1 && url.indexOf(https) === -1) {
        URL = `${api.wgtRootDir}/${url}/index.html`
    }

    // 调用api打开新的frame
    api.openFrame({
        name,
        url: URL,
        bounces: false,
        rect: {
            x: 0,
            marginTop: safeArea.top,
            w: 'auto',
            marginBottom: safeArea.bottom
        },
        animation: {
            type: 'none',
            subType: 'from_right',
            duration: 300
        },
        useWKWebView: true
    })
}

// 关闭窗口
closeFrame(name) {
    api.closeFrame({ name })
}
```

## web 模块间的相互调用

项目中，各个 web 模块之间的交互，使用 SuperWebviewSDK 中提供的 execScript 方法实现，此方法可以实现各个模块之间的方法相互调用。调用 postNotification 方法，会在当前页面中发起一个通知，其中 frameName 为指定 frame 的名称，funcName 为通知名称，parmas 为需要带的参数。在指定 frame 中实现 addObserver 方法，其中 funcName 为通知名称，callback 为收到通知后，需要执行的方法。

```js
/* 使用 */

// a 页面
this.$h.postNotification("app", "add", { i: 10 });

// 在名为 app 的 frame 中 的 b 页面
this.$h.addObserver("add", parmas => {
  alert(`${parmas.i + 1}`);
});
```

```js
/* Hybrid */

// 跨页面通知
postNotification(frameName, funcName, parmas) {
    var jsfun = `${funcName}("${JSON.stringify(parmas || '')}");`
    api.execScript({
        frameName,
        script: jsfun
    })
}

// 添加通知观察者
addObserver(funcName, callback) {
    window[funcName] = parmas => {
        const dic = JSON.parse(parmas) || ''
        callback(dic)
    }
}
```

## 选取相册

此方法用于选取照片，也可通过拍照获取照片。会返回一个 Promise 对象，一般配合 zv-upload 组件一起使用。max: 最大能选取的照片数

```js
/* 使用 */

async getPhoto() {
    try {
      const imgs = await this.$h.uploadImage({ max: 4, fileClass: "test" });
    } catch (error) {
      throw error
    }
}

```

```js
/* Hybrid */

// 选择图片上传
uploadImage({
    compression = true,
    multiple = true,
    max = 1,
    quality = 50,
    resize = 50,
    stickers = {},
    fileClass = ''
} = {}) {
    return new Promise((resolve, reject) => {
        apiUpLoad(_config, max, fileClass, imgs => {
            if (imgs === 'cancel') {
                reject('取消选择')
            } else {
                resolve(imgs)
            }
        })
    })
}
```

## 地图

地图待开发。

## 存储

此存储方法，是用于全局数据的持久化，存储的数据只要不主动  清除或者删除 APP 应用，数据会一直存储在应用中。对于每个模块的共享数据建议存储在 store 中。

```js
/* 使用 */

this.$h.setItem("key", "value");

// 异步取值
this.$h.getItem("key");
or;
// 同步取值
this.$h.getItem("key", true);

this.$h.removeItem("key");
```

```js
/* Hybrid */

// 存储
setItem(key, value) {
    api.setPrefs({ key, value })
}

// 获取存储的值
getItem(key, sync = false) {
    if (sync) {
        return api.getPrefs({
            sync: true,
            key
        })
    } else {
        return new Promise((resolve, reject) => {
            api.getPrefs(
                {
                    key
                },
                function(ret, err) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(ret.value)
                    }
                }
            )
        })
    }
}

// 删除存储的值
removeItem(key) {
    api.removePrefs({ key })
}
```

## 电话

此方法用于拨打电话。

```js
/* 使用 */

this.$h.showCallMenu({ phoneNumber: 15200000000 });
```

```js
/* Hybrid */

showCallMenu({ code = '+86', showDingCall = true, phoneNumber = '' } = {}) {
    api.call({
      type: 'tel_prompt',
      number: phoneNumber
    })
}
```
