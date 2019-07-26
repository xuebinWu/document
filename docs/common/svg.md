# 图标

项目中封装了图标组件 zv-svg-icon，用于加载 svg 图标，且引入了相关的插件，对 svg 进行处理。

```js
/* vue.config.js */

chainWebpack: config => {
  // set svg-sprite-loader
  config.module
    .rule("svg")
    .exclude.add(resolve("src/icons"))
    .end();
  config.module
    .rule("icons")
    .test(/\.svg$/)
    .include.add(resolve("src/icons"))
    .end()
    .use("svg-sprite-loader")
    .loader("svg-sprite-loader")
    .options({
      symbolId: "icon-[name]"
    })
    .end();
};
```

所有的 svg 图标，统一存放在 src/icon/svg 中，并自动挂载到页面中。页面中使用时，只需要写 sgv 的 icon 名字就行。可以通过组件的 width、height 样式属性控制图标的大小。一般情况，通过 color 样式属性就能控制图标的颜色，特殊情况下，需要通过 fill 属性来控制。

```html
<zv-svg-icon iconClass="zrr1"></zv-svg-icon>
```
