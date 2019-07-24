module.exports = {
  title: "产品部前端开发文档",
  description: "Just do it",
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "ZvUI", link: "http://zvui.lhanyun.com" }
    ],
    sidebar: [
      {
        title: "移动端",
        collapsable: false,
        children: [["/mobile/guide", "指南"]]
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
