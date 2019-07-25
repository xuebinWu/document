# 项目优化

- 开启 gzip
- 首屏加入骨架屏
- 添加页面模板创建功能
- 异步路由

```js
{ path: '/order', component: () => import('./views/order.vue') }
```

- 异步组件

```js
export default {
  components: { HellowWorld: () => import("../components/HelloWorld.vue") }
};
```

- 除非组件 1.有预渲染需求； 2.需要频繁切换显示状态，否则使用 v-if 代替 v-show
- 对于多次会用到的逻辑，使用 mixin 封装，例如：多个地方用到相同的请求
- 封装公共样式 assets/styles/mixin.scss
- 使用 svgo 优化 svg
