# 组件的集成与使用

模板项目中，组件集成的方式均为按需引入。按需引入的方式可以有效的减小生产包的体积，达到优化的目的。

## 使用

### 移动模板

在babel.config.js中配置按需引入

```js
module.exports = {
  plugins: [
    ['import', {
      libraryName: '@zvalley/zv-ui',
      libraryDirectory: 'es',
      style: true
    }, 'zv-ui']
  ]
};
```

在src/plugins中的zv-ui.js文件夹中添加需要用的组件

```js
import Vue from 'vue'
import { Button } from '@zvalley/zv-ui'

// 注入，在这个Array中添加对应组件的就行
const componentsList = [Button]

componentsList.reduce((preComponent, currentComponnets) => {
  preComponent.use(currentComponnets)
  return preComponent
}, Vue)
```
