(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{229:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"前端项目模板"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端项目模板","aria-hidden":"true"}},[t._v("#")]),t._v(" 前端项目模板")]),t._v(" "),n("p",[t._v("基于Vue-Cli4.x，建立的前端通用项目模板。请先熟悉"),n("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue-cli4.x"),n("OutboundLink")],1),t._v("的文档。模板仓库地址"),n("a",{attrs:{href:"https://github.com/122687220/web-template",target:"_blank",rel:"noopener noreferrer"}},[t._v("web-template"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"目录构建规范"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目录构建规范","aria-hidden":"true"}},[t._v("#")]),t._v(" 目录构建规范")]),t._v(" "),n("p",[t._v("项目模板的默认应用目录架构提供了良好的代码分层结构，适用于开发或大或小的应用。不建议团队开发的时候，根据自己的偏好组织应用代码，这样会无形中增加项目的开发成本和维护成本。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("── project"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name\n   ├── "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v("                    项目公共目录\n   │   ├── favicon"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ico           Favourite 图标\n   │   └── index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html            页面入口 "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTML")]),t._v(" 模板\n   ├── src                       项目源码目录\n   │   ├── main"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js               入口js文件\n   │   ├── config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js             公共配置  \n   │   ├── App"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue               根组件\n   │   ├── api                   把所有请求数据的接口，按照模块在单独的"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JS")]),t._v("文件中\n   │   │   ├── home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js           首页接口\n   │   │   ├── detail"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js         详情页接口，等等\n   │   │   ···\n   │   ├── assets                静态资源目录，公共的静态资源，图片，字体等\n   │   │   ├── fonts             字体资源\n   │   │   ├── images            图片资源\n   │   │   ···\n   │   ├── utlis                  公共脚本\n   │   │   │── index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js           "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JS")]),t._v(" 工具函数\n   │   │   │   ···\n   │   ├── mixins                 混入js\n   │   │   │   ···\n   │   ├── lang                   国际化配置\n   │   │   │   ···\n   │   ├── icons                  图标\n   │   │   │   ···\n   │   ├── styles                 公共样式，可以是各种预处理语言\n   │   │   │── index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("css          样式主文件\n   │   │   │── reset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("css          重置样式\n   │   │   │   ···\n   │   │   ···\n   │   ├── components             公共组件目录\n   │   │   ···\n   │   ├── directives             自定义指令目录\n   │   │   ├── index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js           自动引入自定义指令\n   │   │   ···\n   │   ├── http                   封装的 "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),t._v(" 请求方法\n   │   │   ├── index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js           Axios 的封装\n   │   │   ···\n   │   ├── mixins                 混入功能目录\n   │   │   ···\n   │   ├── plugins                插件目录\n   │   │   ├── index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js           自动引入插件\n   │   │   ···\n   │   ├── store                   数据中心\n   │   │   ├── modules             模块文件夹\n   │   │   ├── getters"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js          获取数据的方法定义\n   │   │   └── index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js            数据中心入口文件\n   │   ├── routes                  前端路由\n   │   │   └── index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n   │   └── views                   页面目录，所有业务逻辑的页面都应该放这里\n   │       ├── home                应用首页\n   │       │   └── index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n   │       ···\n   ├── "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("development             Vue 开发环境的配置\n   ├── "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("production              Vue 生成环境的配置\n   ├── "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eslintrc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js                 Eslint 配置文件\n   ├── "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gitignore                   Git 忽略文件\n   ├── "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json                 包依赖文件\n   ├── "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("lock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json            依赖包版本管理文件\n   ├── "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("README")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("md                    项目介绍\n   ├── vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js                vue"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("cli 项目脚手架配置\n   ···\n")])])]),n("ul",[n("li",[t._v("资源目录")])]),t._v(" "),n("p",[t._v("资源目录 assets 用于组织未编译的静态资源如 图片。")]),t._v(" "),n("ul",[n("li",[t._v("组件目录")])]),t._v(" "),n("p",[t._v("组件目录 components 用于组织应用的 Vue.js 组件。若是全局组件，请放在 components/global下，components/index.js 会自动引入global中的组件。例：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// glabal/button/index.js")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" main "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./main.vue'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" main\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// glabal/button/main.vue")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("slot"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("slot"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TestButton'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("style lang"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scss"')]),t._v(" scoped"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),n("ul",[n("li",[t._v("布局目录")])]),t._v(" "),n("p",[t._v("布局目录 layouts 用于组织应用的布局组件。")]),t._v(" "),n("ul",[n("li",[t._v("页面目录")])]),t._v(" "),n("p",[t._v("页面目录 views 用于组织应用的路由及视图。")]),t._v(" "),n("ul",[n("li",[t._v("插件目录")])]),t._v(" "),n("p",[t._v("插件目录 plugins 用于组织那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件。所有要引入的element-ui/zv-ui组件，都在plugins中建立.js文件引入。例：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// plugins/zv-ui.js")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Button"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Icon "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@zvalley/zv-ui"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" componentsList "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Button"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Icon"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ncomponentsList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("preComponent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" currentComponnets")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  preComponent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currentComponnets"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" preComponent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ul",[n("li",[t._v("Store 目录")])]),t._v(" "),n("p",[t._v("store 目录用于组织应用的 Vuex 状态树 文件。以模块的方式集成store")]),t._v(" "),n("ul",[n("li",[t._v("样式目录")])]),t._v(" "),n("p",[t._v("所有的公共样式，全部放在styles文件夹下")]),t._v(" "),n("ul",[n("li",[t._v("国际化目录")])]),t._v(" "),n("p",[t._v("lang目录是一个独立的可编译目录，会将lang/zh_CN文件夹下的.json文件中所有的中文，自动翻译成目标语言，并在相应的文件夹中生成目标语言文件")]),t._v(" "),n("ul",[n("li",[t._v("网络请求目录")])]),t._v(" "),n("p",[t._v("http目录中，基于axios封装的网络请求。所有的网络请求，都必须写在api文件夹中")]),t._v(" "),n("ul",[n("li",[t._v("路由目录")])]),t._v(" "),n("p",[t._v("根据不同的业务模块进行拆分路由，并在router文件夹中创建对应的模块文件夹。router/index.js会自动扫描模块路由并导入")]),t._v(" "),n("ul",[n("li",[t._v("编码规范及风格检查")])]),t._v(" "),n("p",[t._v("项目中已经集成了 eslint + prettier + stylelint 检查，每回提交更新时，会触发gitHook自动检查代码是否符合规范，若不满足规范，会提交失败")]),t._v(" "),n("ul",[n("li",[t._v("commit规范")])]),t._v(" "),n("p",[t._v("项目中已经集成了 commitlint，每回提交更新时，会触发gitHook自动检查提交的信息是否符合规范，若不满足规范，会提交失败，详细规则，请查看.commitlintrc.js文件")])])},[],!1,null,null,null);s.default=e.exports}}]);