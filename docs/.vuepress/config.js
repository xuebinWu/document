module.exports = {
  title: "产品部 · 前端开发文档",
  description: "Just do it",
  base: "/web_doc/",
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
      { text: "首页", link: "/" },
      { text: "指南", link: "/common/" },
      { text: "ZvUI", link: "http://zvui.lhanyun.com" }
    ],
    sidebar: [
      {
        title: "通用文档",
        children: [
          ["/common/", "指南"],
          ["/common/standard", "编码规范"],
          ["/common/style", "风格指南"],
          ["/common/directory", "目录结构"],
          ["/common/env", "环境编译"],
          ["/common/network", "网络请求"],
          ["/common/permission", "权限控制"],
          ["/common/router", "路由"],
          ["/common/template", "模板创建"],
          ["/common/component", "定义组件"],
          ["/common/svg", "图标"],
          ["/common/optimize", "优化"],
          ["/common/cli", "脚手架"]
        ]
      },
      {
        title: "移动端",
        children: [
          ["/mobile/", "指南"],
          ["/mobile/fit", "适配"],
          ["/mobile/hybrid", "Hybrid使用"]
        ]
      },
      {
        title: "PC端",
        children: [["/PC/", "指南"]]
      }
    ]
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
