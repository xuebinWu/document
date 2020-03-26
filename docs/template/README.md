# 前端项目模板

基于Vue-Cli4.x，建立的前端通用项目模板。请先熟悉[Vue-cli4.x](https://cli.vuejs.org/zh/guide/)的文档

## 目录构建规范

项目模板的默认应用目录架构提供了良好的代码分层结构，适用于开发或大或小的应用。不建议团队开发的时候，根据自己的偏好组织应用代码，这样会无形中增加项目的开发成本和维护成本。

``` js
── project-name
   ├── public                    项目公共目录
   │   ├── favicon.ico           Favourite 图标
   │   └── index.html            页面入口 HTML 模板
   ├── src                       项目源码目录
   │   ├── main.js               入口js文件
   │   ├── config.js             公共配置  
   │   ├── App.vue               根组件
   │   ├── api                   把所有请求数据的接口，按照模块在单独的JS文件中
   │   │   ├── home.js           首页接口
   │   │   ├── detail.js         详情页接口，等等
   │   │   ···
   │   ├── assets                静态资源目录，公共的静态资源，图片，字体等
   │   │   ├── fonts             字体资源
   │   │   ├── images            图片资源
   │   │   ···
   │   ├── utlis                  公共脚本
   │   │   │── index.js           JS 工具函数
   │   │   │   ···
   │   ├── mixins                 混入js
   │   │   │   ···
   │   ├── lang                   国际化配置
   │   │   │   ···
   │   ├── icons                  图标
   │   │   │   ···
   │   ├── styles                 公共样式，可以是各种预处理语言
   │   │   │── index.css          样式主文件
   │   │   │── reset.css          重置样式
   │   │   │   ···
   │   │   ···
   │   ├── components             公共组件目录
   │   │   ···
   │   ├── directives             自定义指令目录
   │   │   ├── index.js           自动引入自定义指令
   │   │   ···
   │   ├── http                   封装的 HTTP 请求方法
   │   │   ├── index.js           Axios 的封装
   │   │   ···
   │   ├── mixins                 混入功能目录
   │   │   ···
   │   ├── plugins                插件目录
   │   │   ├── index.js           自动引入插件
   │   │   ···
   │   ├── store                   数据中心
   │   │   ├── modules             模块文件夹
   │   │   ├── getters.js          获取数据的方法定义
   │   │   └── index.js            数据中心入口文件
   │   ├── routes                  前端路由
   │   │   └── index.js
   │   └── views                   页面目录，所有业务逻辑的页面都应该放这里
   │       ├── home                应用首页
   │       │   └── index.vue
   │       ···
   ├── .env.development             Vue 开发环境的配置
   ├── .env.production              Vue 生成环境的配置
   ├── .eslintrc.js                 Eslint 配置文件
   ├── .gitignore                   Git 忽略文件
   ├── package.json                 包依赖文件
   ├── package-lock.json            依赖包版本管理文件
   ├── README.md                    项目介绍
   ├── vue.config.js                vue/cli 项目脚手架配置
   ···
```

- 资源目录

资源目录 assets 用于组织未编译的静态资源如 图片。

- 组件目录

组件目录 components 用于组织应用的 Vue.js 组件。若是全局组件，请放在 components/global下，components/index.js 会自动引入global中的组件。例：

``` js
// glabal/button/index.js

import main from './main.vue'
export default main


// glabal/button/main.vue

<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'TestButton',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
...
</style>
```

- 布局目录

布局目录 layouts 用于组织应用的布局组件。

- 页面目录

页面目录 views 用于组织应用的路由及视图。

- 插件目录

插件目录 plugins 用于组织那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件。所有要引入的element-ui/zv-ui组件，都在plugins中建立.js文件引入。例：

```js
// plugins/zv-ui.js

import Vue from "vue";
import { Button, Icon } from "@zvalley/zv-ui";

const componentsList = [Button, Icon];

componentsList.reduce((preComponent, currentComponnets) => {
  preComponent.use(currentComponnets);
  return preComponent;
}, Vue);
```

- Store 目录

store 目录用于组织应用的 Vuex 状态树 文件。以模块的方式集成store

- 样式目录

所有的公共样式，全部放在styles文件夹下

- 国际化目录

lang目录是一个独立的可编译目录，会将lang/zh_CN文件夹下的.json文件中所有的中文，自动翻译成目标语言，并在相应的文件夹中生成目标语言文件

- 网络请求目录

http目录中，基于axios封装的网络请求。所有的网络请求，都必须写在api文件夹中

- 路由目录

根据不同的业务模块进行拆分路由，并在router文件夹中创建对应的模块文件夹。router/index.js会自动扫描模块路由并导入

- 编码规范及风格检查

项目中已经集成了 eslint + prettier + stylelint 检查，每回提交更新时，会触发gitHook自动检查代码是否符合规范，若不满足规范，会提交失败

- commit规范

项目中已经集成了 commitlint，每回提交更新时，会触发gitHook自动检查提交的信息是否符合规范，若不满足规范，会提交失败，详细规则，请查看.commitlintrc.js文件
