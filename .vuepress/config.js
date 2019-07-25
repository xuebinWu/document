module.exports = {
  title: "产品部前端开发文档",
  description: "Just do it",
  themeConfig: {
    displayAllHeaders: true,
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
          ["/common/directory", "目录结构"],
          ["/common/env", "环境编译"],
          ["/common/network", "网络请求"],
          ["/common/permission", "权限控制"],
          ["/common/template", "模板创建"],
          ["/common/component", "定义组件"]
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
        children: [
          /* ... */
        ]
      }
    ]
  }
};
