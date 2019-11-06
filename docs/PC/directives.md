# 自定义指令文件 directives

项目中主要的自定义指令统一放到directives目录下进行管理，每个文件对应相关的指令加载，index.js文件将会统一将该目录下的所有文件都统一集成并导入的main.js中，下面为插件加载的例子

```js
import Vue from 'vue'
import store from '@/store'

Vue.directive('permissions', {
  bind(el, { value }) {
    const functionLists = store.getters.functionLists
    if (!functionLists.filter(item => item.code === value).length) {
      if (el.parentNode) {
        el.parentNode.removeChild(el)
      } else {
        el.style.display = 'none'
      }
    }
  }
})
```