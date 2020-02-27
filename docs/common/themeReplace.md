# 换肤

## 配置
换肤功能的实现依赖于一个webpack插件webpack-theme-color-replacer。需要在vue.config.js中进行相关的配置。同时utils文件夹下面会有一个themeColorClient.js
导出了两个函数 changeThemeColor（切换主题色）和 initThemeColor （初始化主题色）

```js
/* vue.config.js */

...
const ThemeColorReplacer = require('webpack-theme-color-replacer')
...
{
  configureWebpack: config => {
    // 配置换肤相关的实现
    // 目前的主题色
    const themeColor = '#70b913'

    config.plugins.push(
      new ThemeColorReplacer({
        // 可以写多个色值
        matchColors: [themeColor],
        fileName: 'css/theme-colors-[contenthash:8].css',
        // 需要额外提取的css文件 例如：element-ui的默认css文件项
        externalCssFiles: [],
        injectCss: false,
        isJsUgly: process.env.NODE_ENV !== 'development'
      })
    )
  }
}

/* themeColorClient.js */

import client from 'webpack-theme-color-replacer/client'

export let curColor = '#7cb342'

// 动态切换主题色
export function changeThemeColor(newColor) {
  var options = {
    newColors: [newColor]
  }
  return client.changer.changeColor(options, Promise).then(() => {
    curColor = newColor
    localStorage.setItem('theme_color', curColor)
  })
}

export function initThemeColor() {
  const savedColor = localStorage.getItem('theme_color')
  if (savedColor) {
    curColor = savedColor
    changeThemeColor(savedColor)
  }
}
```

### demo
```html
<template>
  <div class="home">
    <input type="color" :value="colorValue" @change="changeColor" />
  </div>
</template>
```

```js
<script>
import { changeThemeColor, curColor } from '@/utils/themeColorClient'
export default {
  name: 'home',
  data() {
    return {
      colorValue: curColor
    }
  },
  methods: {
    changeColor(newColor) {
      changeThemeColor(newColor).then(() => {
        console.log('主题色切换成功~')
      })
    }
  }
}
</script>

```