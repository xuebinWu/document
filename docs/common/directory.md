# 项目目录结构

```text
.
├── src
│   ├── api
│   │   └── test.js                api接口调用方法文件
│   ├── assets
│   │   ├── img                    公共图片存放文件
│   │   └── styles                 公共样式存放文件
│   ├── components
│   │   ├── global                 公共全局组件存放文件
│   │   ├── index.js               自动将global中的组件挂载到Vue上
│   ├── icons
│   │   ├── index.js               自动将svg文件夹中的svg图标引入项目
│   │   ├── svgo.yml               svgo优化配置文件
│   │   └── svg                    存放用svgo优化过后的svg图标
│   ├── main.js
│   ├── mixins                     全局mixin存放文件夹
│   │   ├── emitter.js             自定义组件方法
│   │   └── zv-model.js            用来解决组件封装时v-model双层绑定的问题
│   ├── mock
│   │   ├── index.js
│   │   └── test.js                mock数据模块
│   ├── router
│   │   └── index.js               自动加载router下的路由模块
│   ├── store
│   │   ├── getters.js
│   │   ├── index.js
│   │   └── modules                store模块
│   ├── utils
│   │   ├── assist.js              自定义组件方法
│   │   ├── errorLog.js            全局捕获错误方法
│   │   ├── index.js               一般工具方法
│   │   ├── permission.js          全局路由权限控制
│   │   └── request                封装网络请求
│   └── views
│       ├── Home.vue
│       ├── errorPage              404页面
│       └── examples               组件示例
├── vue.config.js                  Vue项目配置文件
├── .env.mock                      设置mock环境下，所要的全局属性（定义模拟数据）
├── .env.debugger                  设置debugger环境下，所要的全局属性(用于局域网中调试。若后端是微服务，配合debugger.port.js。)
├── .env.development               设置development环境下，所要的全局属性（开发环境）
└── .env.production                设置production环境下，所要的全局属性（生产环境）
```
