# 编码规范

## 安全区域适配

通过 SuperWebviewSDK 提供的方法，来获取到当前设备的安全区域大小（safeArea）。并根据 safeArea 来确定每个 frame 的大小位置，从而适配刘海屏。

::: warning 注意
刘海配的适配代码已经封装在 Hybrid 类中，web 开发者不需要关心。当要打开一个新的 frame 时，只需要调用 Hybrid 类中的 openFrame 方法即可。
:::

```js
// 将 Hybrid 类实例绑定到Vue上
const hybrid = new Hybrid();
Vue.prototype.$h = hybrid.apiCloud;

// 页面中打开一个新的 web 模块
this.$h.openFrame("name", "url");
```

## 屏幕适配

web 项目使用 vw 布局以适配手机屏幕。这里不多介绍 vw、vh 属性，网上一搜一大把。项目中已经安装了 postcss-px-to-viewport 插件，并在 vue.config.js 中做了相关配置。页面中直接使用 px 单位，项目编译后自动转换为对应的 vw 或 vh 属性。若不想被转换成 vw 或者 vh 属性，使用大写的 PX。

::: warning 注意
对于 1px 边框，请使用[vant 内置样式](https://youzan.github.io/vant/#/zh-CN/style):
van-hairline--top、van-hairline--bottom、van-hairline--left、van-hairline--right、van-hairline--top-bottom、van-hairline--surround
:::

```js
/* vue.config.js */
postcss: {
  plugins: [
    autoprefixer(),
    pxtoviewport({
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 3,
      viewportUnit: "vw",
      selectorBlackList: [".ignore", ".hairlines", "van-circle__layer"],
      minPixelValue: 1,
      mediaQuery: false
    })
  ];
}
```

对于 vw 不能解决的适配问题，可以配合媒体查询解决

```css
/* 小屏幕下，改变某样式中的span标签的样式 */
@media only screen and (min-width: 320px) and (max-width: 340px) {
  .test {
    span {
      margin-left: 1.5%;
    }
  }
}
```
