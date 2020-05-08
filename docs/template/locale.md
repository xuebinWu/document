# 国际化

## 配置

在模板项目的PC端和移动端-门户开发分支中都配置了国际化，其他项目想要用的话，可以将这两个分支中的src/lang文件夹拷贝到项目中的src文件夹下，在main.js中集成。语言切换参考Vue-i18n的使用，this.$i18n.locale = 'en_US'。

```js
/* main.js */

...
import i18n from './lang'
...
new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
})
```

::: tip 
lang文件夹中集成了自动翻译脚本，npm run translation 命令会自动将lang/zh_CH中定义的中文字段文件，翻译成英文字段文件，并拷贝到lang/en_US文件夹中。想要生成更多种语言文件，可参考lang/gulpfile.js中的配置。
:::