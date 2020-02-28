# 相关工程结构说明

大部分的工程结构和现在的电脑端，手机端工程结构类似，故只介绍差点


- components // 存放满足uni-app结构的组件集合
- pages   // 页面文件
- router  // 路由的集合，其中index.js处理路由跳转的权限问题 （pages文件夹下面存放每一个页面的js文件，不支持嵌套）
- static  // 静态资源存放文件夹
- styles  // scss 公共文件的存放点，导入需在uni.scss中导入
- uni.scss  // 全局scss文件的入口，会自动带入到项目中去
- page.json // 路由的配置项，注意这里和router文件中都需要配置
- manifest.json  // 打包成不同的平台工程时的差异配置
- app.vue  // 全局的一些事件的处理地方，无template
