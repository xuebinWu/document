(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{190:function(s,t,e){"use strict";e.r(t);var n=e(0),a=Object(n.a)({},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"环境编译"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境编译","aria-hidden":"true"}},[s._v("#")]),s._v(" 环境编译")]),s._v(" "),e("p",[s._v("通常项目中会存在 5 个环境的配置文件，其中 mock 环境是用于模拟数据")]),s._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[s._v("接口调试")]),s._v(" "),e("p",[s._v("mock 环境: 当后台接口还未完成时，本地模拟数据进行调试。")]),s._v(" "),e("p",[s._v("debugger 环境: 当需要连接后台电脑调试接口时，将.env.debugger 文件的地址改成对应后台的 IP 地址，开启调试环境编译，进行联调。")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 测试环境\n.env.development\n\n// 预生产环境\n.env.prepro\n\n// 生产环境\n.env.production\n\n// mock环境\n.env.mock\n\n// 调试环境\n.env.debugger\n")])])]),e("p",[s._v("编译命令")]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 测试环境编译")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"serve"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vue-cli-service serve"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 生产环境编译")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vue-cli-service build"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 预生产环境编译")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pre"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vue-cli-service build --mode prepro"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 调试环境编译")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"debugger"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vue-cli-service serve --mode debugger"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// mock环境编译")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"mock"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vue-cli-service serve --mode mock"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// lint检查编译")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lint"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vue-cli-service lint --fix --ext .js,.vue src"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 单元测试编译")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test:unit"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vue-cli-service test:unit"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 生产环境包分析")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"analyze"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vue-cli-service build --report"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// svg文件优化")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"svgo"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"svgo -f src/icons/svg --config=src/icons/svgo.yml"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 新建模板页面")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"new"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"plop"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])])])},[],!1,null,null,null);t.default=a.exports}}]);