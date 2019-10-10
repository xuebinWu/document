<!--
 * @Author: Yu lin Liu
 * @Date: 2019-07-26 14:42:48
 * @Description: file content
 -->

# 路由

在 router 文件夹中，按模块存放整个项目的路由文件。开发者根据不同的业务模块进行拆分路由，将路由信息统一写在每个模块文件夹的 index.js 中并导出一个路由配置数组。一个模块配一个路由文件夹，且文件夹中只会存在一个 index.js 文件，不会有其他文件。

::: tip
每个模块文件夹中定义的路由，都会被自动加载到 router 文件夹下的 index.js 中，开发者不需要手动添加。(若新加的路由没有及时生效，需重新编译)
:::

::: warning 注意
若无特殊要求，路由跳转用name值进行跳转 eg: this.$router.push({ name: 'app-center' })，避免使用path属性。
:::

```
.
├── router
│   ├── login
│   │   └── index.js
│   └── device
│   │   └── index.js
```

每个路由信息，必须包含 path、name、component、meta 属性。其中 component 定义为异步加载的方法加载页面组件，meta 中必须要有 title 属性，title 属性将用于页面统计。

::: warning
定义路由时，path、页面路径、页面所在的文件夹名字，应该一一对应，即根据 path 字段，可以在 view 文件夹中找到对应的页面
:::

```js
export default [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: { title: "登录" }
  },
  {
    path: "/device/device-detail",
    name: "device-detail",
    component: () => import("@/views/device/device-detail/index.vue"),
    meta: { title: "设备详情" }
  }
];
```

对于 PC 端可能存在布局组件的情况

```js
import BaseLayout from "@/layouts/BaseLayout";
import SimpleLayout from "@/layouts/SimpleLayout";
export default [
  {
    path: "/notice-manager",
    component: BaseLayout,
    children: [
      {
        path: "index",
        name: "notice-manager",
        component: () => import("@/views/notice-manager/index"),
        meta: {
          title: "公告管理"
        }
      }
    ]
  }
];
```
