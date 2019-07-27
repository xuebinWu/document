# 介绍

移动端 为混合开发，借助 APICloud 的 SuperWebviewSDK 实现 web 和原生的交互，并将所有的交互方法，封装在 utils 目录下的 hybrid 文件夹中。web 侧，以 Vue 为技术栈进行开发，主要涉及到的第三方库有 Vuex、vue-router、Vue-n18i、vant、axios 等。原生侧，iOS 为 Objective-C 开发，Android 为 Java 开发。此文档主要介绍 web 侧和 web 与原生交互的开发。

## 架构

移动端的架构是基于 SuperWebviewSDK 搭建的。包括 web 与原生的交互、web 模块的显示与关闭、共享数据、各个 web 模块间的交互、热更新等。其中每个 web 模块都会用一个 frame 去承载，在每个 web 模块加载前都需要先绑定 SuperWebviewSDK 的 apiready 方法，并在其中处理需要的公共数据。

::: warning 注意
所有会用到的 SuperWebviewSDK 中的方法都会被封装在 Hybrid 类中，并且会将类实例绑定到 Vue 实例上。不要在页面中直接使用 api.xx 去调用 SuperWebviewSDK 的方法。
:::

<img :src="$withBase('/jiagou.png')" alt="移动端架构图">

## 调试

web 模块集成 vconsole 作线上调试

```js
if (process.env.NODE_ENV !== "production") {
  let VConsole = require("vconsole/dist/vconsole.min");
  new VConsole();
}
```

## web UI 组件库

我们在 vant 组件的基础上，封装了一套适用于我们产品的 UI 组件库 [ZvUI](http://zvui.lhanyun.com)，且由专人负责维护。项目的开发者只需要关注已有组件的用法即可，对于组件库暂无的组件，可自行封装。组件的用法与 vant 基本保持一致。在组件库的开发文档上有详细说明，这里不做过多介绍。
