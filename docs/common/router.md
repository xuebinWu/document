# 路由

在 router 文件夹中，按模块存放整个项目的路由文件。开发者根据不同的业务模块进行拆分路由，将路由信息统一写在每个模块文件夹的 index.js 中并导出一个路由配置数组。一个模块配一个路由文件夹，且文件夹中只会存在一个 index.js 文件，不会有其他文件。

::: tip
每个模块文件夹中定义的路由，都会被自动加载到 router 文件夹下的 index.js 中，开发者不需要手动添加。(若新加的路由没有及时生效，需重新编译)
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

```js
export default [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/index.vue"),
    meta: { title: "登录" }
  }
];
```

对于 PC 端可能存在布局组件的情况

```js
import BaseLayout from "@/layouts/BaseLayout";
import SimpleLayout from "@/layouts/SimpleLayout";
export default [
  {
    path: "/notice",
    component: BaseLayout,
    children: [
      {
        path: "index",
        name: "NoticeManager",
        component: () => import("@/views/noticeManager/index"),
        meta: {
          title: "公告管理"
        }
      }
    ]
  },
  {
    path: "/notice-managers",
    component: SimpleLayout,
    children: [
      {
        path: "notice-edit",
        name: "NoticeEdit",
        component: () => import("@/views/noticeManager/NoticeEdit/index"),
        meta: {
          title: "公告编辑"
        }
      },
      {
        path: "notice-check",
        name: "NoticeCheck",
        component: () => import("@/views/noticeManager/NoticeEdit/index"),
        meta: {
          title: "公告详情"
        }
      }
    ]
  }
];
```
