# 插件 plugins

项目中主要的插件统一放到plugins目录下进行管理，每个文件对应相关的插件加载，index.js文件将会统一将该目录下的所有文件都统一集成并导入的main.js中，下面为插件加载的例子

```js
import Vue from 'vue'

import ZvUI from 'zv-ui__pc'
import 'zv-ui__pc/lib/theme-chalk/index.css'

Vue.use(ZvUI)
```