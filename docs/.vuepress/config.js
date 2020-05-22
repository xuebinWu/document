/*
 * @Author: Yu lin Liu
 * @Date: 2019-07-27 09:58:03
 * @Description: file content
 */
module.exports = {
  title: "前端开发文档",
  description: "Just do it",
  base: "/document/",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }], //引入favicon
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/icons/apple-touch-icon-152x152.png` }
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png"
      }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }]
  ],
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "上次更新",
    repo: "122687220/document",
    repoLabel: "GitHub",
    docsRepo: "122687220/document",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,
    editLinkText: "改善此页面！",
    nav: [
      { text: "指南", link: "/common/" },
      { text: "工程模板", link: "/template/" },
      { 
        text: "组件库", 
        items: [
          { text: 'ZvUI', link: 'https://122687220.github.io/zv-ui/' },
          { text: 'FineUI', link: 'https://122687220.github.io/fine-ui/' }
        ]
      },
      { 
        text: "端开发", 
        items: [
          { text: '移动端', link: '/mobile/' },
          { text: 'PC端', link: '/PC/' },
          { text: '小程序', link: '/miniprogramme/' }
        ]
      },
      { text: "知识库", link: "/experience/" },
      { text: "工程化相关", link: "/other/" }
    ],
    sidebar: {
      '/common/': [{
        title: "编码规范",
        children: [
          ["/common/", "指南"],
          ["/common/standard", "通用书写规范"],
          ["/common/html", "HTML规范"],
          ["/common/js", "JS规范"],
          ["/common/css", "CSS规范"],
          ["/common/vue", "Vue规范"],
          ["/common/git-commit", "Git提交日志规范"],
          ["/common/git-flow", "Git分支策略"],
          ["/common/code-review", "Code Review"],
        ]
      }],
      '/template/': [{
        title: "项目模板",
        children: [
          ["/template/", "指南"],
          ["/template/join-up", "接入"],
          ["/template/env", "环境编译"],
          ["/template/component", "组件使用"],
          ["/template/network", "网络请求"],
          ["/template/permission", "权限控制"],
          ["/template/router", "路由"],
          ["/template/locale", "国际化"],
          ["/template/svg", "图标"],
          ["/template/themeReplace", "主题换肤"],
          ["/template/fit", "适配"],
          ["/template/route-cache", "路由缓存"],
          ["/template/optimize", "优化"],
          ["/template/skeleton", "骨架屏"],
        ]
      }],
      '/mobile/': [{
        title: "移动端",
        children: [
          ["/mobile/", "指南"],
          ["/mobile/debug", "调试"],
          ["/mobile/hybrid1", "hybrid-sdk v1.x"],
          ["/mobile/hybrid2", "hybrid-sdk v2.x"],
          ["/mobile/modules", "公共模块"],
          ["/mobile/prepare", "开发准备"]
        ]
      }],
      '/miniprogramme/': [{
        title: "小程序",
        children: [
          ["/miniprogramme/", "指南"],
          ["/miniprogramme/constructor", "项目结构说明"],
          ["/miniprogramme/request", "网络请求"],
          ["/miniprogramme/components", "组件介绍"]
        ]
      }],
      '/PC/': [{
        title: "PC端",
        children: [
          ["/PC/", "指南"],
          ["/PC/config", "全局配置"],
          ["/PC/process", "环境变量配置"],
          ["/PC/directives", "全局指令"],
          ["/PC/plugin", "全局插件"],
          ["/PC/layout", "全局布局组件"]
        ]
      }],
      '/other/': [{
        title: "其他",
        children: [
          ["/other/component", "定义组件"],
          ["/other/version", "版本管理"],
          ["/other/vue-plugin", "vue插件模版"],
          ["/other/cli", "脚手架"],
          ["/other/template", "模板创建"],
          ["/other/tools", "开发工具配置"],
          ["/other/install", "安装包地址"]
        ]
      }],
      '/experience/': [{
        title: "知识库",
        children: [
          ["/experience/", "指南"],
          ["/experience/mobile", "移动端"],
          ["/experience/pc", "PC端"],
          ["/experience/hybrid", "Hybrid"],
          ["/experience/miniprogrammer", "小程序"]
        ]
      }]
    }
  },
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用.",
          buttonText: "刷新"
        }
      }
    ],
    ["@vuepress/back-to-top", true],
    ["@vuepress/medium-zoom", true]
  ]
};
