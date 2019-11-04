# 调试

## vConsole
web 模块集成 [vConsole](https://github.com/Tencent/vConsole/blob/dev/doc/tutorial_CN.md) 作线上调试工具。

```js
if (process.env.NODE_ENV !== "production") {
  let VConsole = require("vconsole/dist/vconsole.min");
  new VConsole();
}
```

## 在线调试

### 测试环境调试

测试环境调试，只需要手机和电脑处于同一局域网中，手机通过IP的方式，访问启动的页面。结合vConsole，便能完成相应的调试工作。

### 生产环境调试
生产环境调试是指打包之后，调试dist文件中的资源。

#### 本地构建一个静态文件服务器
依赖[VUE CLI](https://cli.vuejs.org/zh/guide/deployment.html#%E6%9C%AC%E5%9C%B0%E9%A2%84%E8%A7%88)官方介绍的[serve](https://github.com/zeit/serve)。
手机通过IP的方式，访问启动的页面。结合vConsole，便能完成相应的调试工作。

::: warning 注意
调试时，需将vue.config.js文件中的publicPath字段的值改为'./'，否则不能正常访问资源。
:::

```sh
npm install -g serve

serve dist
```

::: tip
serve dist -l xxx 指定服务的端口号 ，例如： serve dist -l 8080
:::

## 调试APP

为方便开发人员能够在真实的环境中进行调试，开发了一个专门用来调试的APP，Android和iOS手机可以通过扫描下方二维码进行安装。此APP中集成了移动端所需的所有开发环境和依赖。

<img :src="$withBase('/develop.png')" alt="安装二维码">

::: tip
在URL中输入需访问的IP，点击 Click Me! 便可以访问到页面了
:::
<img :src="$withBase('/debug.jpg')" width="200px" alt="安装二维码">

