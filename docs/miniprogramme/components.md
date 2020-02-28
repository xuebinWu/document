# 组件

所有的组件都在components中，适应于大部分的平台，组件目录如下

uni-app组件引入的坑，目前不支持用webpack引入,需要在每个用到的页面中
或者在main.js中引入单个的组件

```
{
  "path": "pages/index/index",
  "style": {
    "navigationBarTitleText": "uni-app"
  }
},
{
  "path": "pages/button/button",
  "style": {
    "navigationBarTitleText": "button"
  }
},
{
  "path": "pages/swiper-action/swiper-action",
  "style": {
    "navigationBarTitleText": "swiperaction"
  }
},
{
  "path": "pages/nodata/nodata",
  "style": {
    "navigationBarTitleText": "nodata"
  }
},
{
  "path": "pages/upload/upload",
  "style": {
    "navigationBarTitleText": "upload"
  }
},
{
  "path": "pages/collapse/collapse",
  "style": {
    "navigationBarTitleText": "collapse"
  }
},
{
  "path": "pages/divider/divider",
  "style": {
    "navigationBarTitleText": "divider"
  }
},
{
  "path": "pages/actionsheet/actionsheet",
  "style": {
    "navigationBarTitleText": "actionsheet"
  }
},
{
  "path": "pages/list/list",
  "style": {
    "navigationBarTitleText": "list"
  }
},
{
  "path": "pages/tabs2/tabs2",
  "style": {
    "navigationBarTitleText": "tabs2"
  }
},
{
  "path": "pages/icons/icons",
  "style": {
    "navigationBarTitleText": "icons"
  }
},
{
  "path": "pages/picker/picker",
  "style": {
    "navigationBarTitleText": "picker"
  }
},
{
  "path": "pages/form/form",
  "style": {
    "navigationBarTitleText": "form"
  }
},
{
  "path": "pages/badge/badge",
  "style": {
    "navigationBarTitleText": "badge"
  }
},
{
  "path": "pages/title/title",
  "style": {
    "navigationBarTitleText": "title"
  }
},
{
  "path": "pages/tag/tag",
  "style": {
    "navigationBarTitleText": "tag"
  }
},
{
  "path": "pages/noticebar/noticebar",
  "style": {
    "navigationBarTitleText": "noticebar"
  }
},
{
  "path": "pages/popup/popup",
  "style": {
    "navigationBarTitleText": "popup"
  }
},
{
  "path": "pages/indexed-list/indexed-list",
  "style": {
    "navigationBarTitleText": "indexed-list"
  }
},
{
  "path": "pages/navbar/navbar",
  "style": {
    "navigationBarTitleText": "navbar"
  }
},
{
  "path": "pages/calendar/calendar",
  "style": {
    "navigationBarTitleText": "title"
  }
},
{
  "path": "pages/card/card",
  "style": {
    "navigationBarTitleText": "card"
  }
},
{
  "path": "pages/tabs/tabs",
  "style": {
    "navigationBarTitleText": "tabs"
  }
},
{
  "path": "pages/search/search",
  "style": {
    "navigationBarTitleText": "search"
  }
},
{
  "path": "pages/drawer/drawer",
  "style": {
    "navigationBarTitleText": "drawer"
  }
},
{
  "path": "pages/steps/steps",
  "style": {
    "navigationBarTitleText": "steps"
  }
},
{
  "path": "pages/scroll/scroll",
  "style": {
    "navigationBarTitleText": "scroll",
    "disableScroll": true, 
    "app-plus": {
      "bounce": "none"
    }
  }
},
{
  "path": "pages/grid/grid",
  "style": {
    "navigationBarTitleText": "grid"
  }
}
```