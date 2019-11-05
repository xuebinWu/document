<!--
 * @Author: Yu lin Liu
 * @Date: 2019-07-25 16:28:31
 * @Description: file content
 -->

# Hybrid 类的使用

::: warning 注意
由于api属性是异步注入到页面中的，所以即使页面已经渲染完了，也有可能拿不到api对象。模板项目里边，在main.js中已经做了基础的处理，在hybrid.apiready触发回调函数时，才会挂载页面dom。在编写代码时，要注意在main.js中，不要出现立即执行api的代码，也不要引用立即执行了api代码的文件。参考main.js中引入permission.js的处理。
:::

## 安装

```sh
npm i @zvalley/hybrid-sdk -S
```

## 绑定

Hybrid 中封装了会用到的 SuperWebviewSDK 中的方法，便于在 web 页面中使用，也便于后期维护。web 项目初始化时，需将 Hybrid 类的实例绑定到 Vue 上。每个页面中，在通过 this.$h 来调用具体的交互方法。

::: warning 注意
对于未封装在 Hybrid 类中的方法，如需使用，请告知项目前端管理人员，参照已封装的方法的书写规范，由专人将需要的方法封装到 Hybrid 类中，并更新文档。
:::

```js
// 将 Hybrid 类实例绑定到Vue上
// 目前 options 只支持 baseColor (基础色)属性的设置 { baseColor: '#777777' }
const hybrid = new Hybrid({ options });
Vue.prototype.$h = hybrid.apiCloud;
```

## isNative

此属性用来判断当前是否是真机环境。若是，则可以正常使用Hybrid


```js
/* 使用 */

this.$h.isNative
```

## apiready

此事件是在 api 对象准备完毕后产生，在每个 web 模块中代码中都需要监听此事件，以确定 APICloud 扩展对象已经准备完毕，可以调用了。如 sessionId、权限、数据字典此类数据，都可在这个方法中获取，并存储到 store 中，以供 web 模块使用。若是给apiready方法传了store参数，hybrid将在store中注册一个store模块（默认模块名称为userInfo），用以管理公共数据。公共数据的存储key为UserInfo。取值：store.state.userInfo.userInfo

```js
/* 使用 */
1.
this.$h.apiready(() => {
    // 业务逻辑代码
    ...
})

2.
import store from '@/store'
this.$h.apiready(() => {
    // 业务逻辑代码
    ...
}, store)
```

```js
/* Hybrid */

apiready(callback) {
    window.apiready = function() {
        callback()
    }
}
```

```js
/* Hybrid - 注册一个名为userInfo的store模块 */
store.registerModule('userInfo', {
    state: {
        userInfo: {}
    },
    
    mutations: {
        SET_USERINFO: (state, userInfo) => {
            state.userInfo = userInfo
        }
    },
    
    actions: {
        SetUserInfo({ commit }, params) {
            return new Promise((resolve, reject) => {
                api.getPrefs({ key: 'UserInfo' }, (ret, err) => {
                    if (err) {
                        reject(err)
                    } else {
                        let info = {}
                        if (ret && ret.value) {
                            info = JSON.parse(ret.value)
                            if (params) {
                                info = { ...info, ...params }
                                api.setPrefs({ key: 'UserInfo', value: JSON.stringify(info) })
                            }
                        }
                        commit('SET_USERINFO', info)
                        resolve(info)
                    }
                })
            })
        }
    }
})
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

## web 与原生交互方法

此方法有 web 端调用，并和原生开发人员约定好字段

```js
/* Hybrid */
addEventListener(name) {
    return new Promise((resolve, reject) => {
      api.addEventListener({ name }, function(ret, err) {
        if (err) {
          reject(err)
        } else {
          resolve(ret.value)
        }
      })
    })
}
```

## 选取相册

此方法用于选取照片，并上传图片，返回一个数组，params 是上传接口所需的参数。具体的功能 zv-ui 中的 update 组件已经实现，项目中只需要使用 zv-update 就可以了。

```js
/* 使用 */

// 相册、拍照
this.$h
  .accessNative({ name: "takePhoto", params })
  .then(res => {
    /*
     * 返回结果
        [
            {
                "code" : '0',
                "id" : '123456789',
                "url" : ''
            }
        ]
    */
  })
  .catch(err => {});

// 拍照， 直接调起相机
this.$h.accessNative({ name: "takeCamera", params })
  .then(res => {
    /*
     * 返回结果
        [
            {
                "code" : '0',
                "id" : '123456789',
                "url" : ''
            }
        ]
    */
  })
  .catch(err => {});
```

## 地图

```js
/* 使用 */
/**
 * params 接受5个参数
 * isMap - true: 显示地图页面，选择地址  false: 后台定位
 * address - 地图显示的默认位置信息（需要根据所传字段显示默认地址时，必传）
 * city - 地图显示的默认城市（非必传，和 address 字段配合使用）
 * latitude - 地图显示的默认位置信息（需要根据所传经纬度显示默认地址时，必传）
 * longitude - 地图显示的默认位置信息（需要根据所传经纬度显示默认地址时，必传）
 */

// 显示地图，选择位置
this.$h.accessNative({ name: "getLocateInfo", params: { isMap: true } })
  .then(res => {
    /*
        "city" : 城市,
        "address" : 位置详情,
        "name" : 位置名字,
        "province" : 省份,
        "district" : 区域,
        "latitude" : 纬度,
        "longitude" : 经度
      */
  })
  .catch(err => {});

// 不显示地图，后台定位当前位置
this.$h.accessNative({ name: "getLocateInfo" })
  .then(res => {
     /*
        "city" : 城市,
        "street" : 街道,
        "locationDescribe" : 位置详情,
        "province" : 省份,
        "district" : 区域,
        "streetNumber" : 门牌号,
        "latitude" : 纬度,
        "longitude" : 经度
      */
  })
  .catch(err => {});
```

## 打开外链

调用此方法，会打开一个新的窗口，用来加载一个 web 页面

```js
/* 使用 */
this.$h.accessNative({
  name: "openUrl",
  params: {
    // web页面的访问地址 ( 必传 )
    url: " ",
    // web页面要显示的title ( 非必传 )
    title: " "
  }
});
```

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

## 缓存

### 获取缓存大小

```js
/* 使用 */

this.$h.getCacheSize().then(size => {});
```

```js
/* Hybrid */

getCacheSize() {
    return new Promise((resolve, reject) => {
      api.getCacheSize(ret => {
        let size = ret.size
        if(size < 0){
          switch(size){
            case -3 : api.toast({ msg: '无法访问存储设备' }); break;
            case -2 : api.toast({ msg: '正在准备USB存储设备' }); break;
            case -1 : api.toast({ msg: '无存储设备' }); break;
            default : break;
          }
          reject(size)                    
        } else {
          size = parseInt((size / 1024 / 1024) * 100) / 100
          resolve(size)
        }
      })
    })
}
```

### 清除缓存

```js
/* 使用 */

this.$h.clearCache().then(() => {});
```

```js
/* Hybrid */

clearCache() {
    return new Promise((resolve, reject) => {
      api.showProgress()
      api.clearCache(function() {
        api.hideProgress()
        api.toast({ msg: '清除完成' })
        resolve()
      })
    })
}
```

## 应用的基础信息

```js
/* 使用 */

this.$h.getAppInfo()
```

```js
/* Hybrid */

getAppInfo() {
    // 应用在桌面显示名称，字符串类型
    const appName = api.appName

    // 应用版本号，字符串类型
    const appVersion = api.appVersion

    // 系统类型，字符串类型
    /**
     * ios            //iOS系统
     * android        //Android系统
     * win            //Windows系统
     * wp             //Windows Phone系统
     */
    const systemType = api.systemType // 比如： ios

    // 手机平台的系统版本，字符串类型
    const systemVersion = api.systemVersion;  // 比如： 8.0

    return {
      appName,
      appVersion,
      systemType,
      systemVersion
    }
}
```

## deviceToken
```js
/* 使用 */

this.$h.getDeviceToken().then(res => {})
```

```js
/* Hybrid */

getDeviceToken() {
    return new Promise((resolve, reject) => {
      api.accessNative(
        { name: 'getDeviceToken' },
        function(ret, err) {
          if (ret) {
            resolve(ret.deviceToken)
          } else {
            reject('0')
          }
        }
      )
    })
}
```
