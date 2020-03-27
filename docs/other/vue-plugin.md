# 开发vue插件的一个基础模版工程（类似vue-router等）
-[模版地址](http://gitlab.zoomlion.com/po_web/vue-plugin-template)

支持Ts/js开发，配置项在rollup.config.js中

基于rollup.js 来进行插件开发，自动打包成支持多个环境的包，也可指定环境打包成对应的包

并集成了release功能 发布到对应的npm仓库中去

```js
// rollup.config.js

const useTypescript = true;  // 是否使用typescript 默认为false
...
// 打包的各个不同环境配置
const builds = {
  'cjs-dev': {
    outFile: 'vue-plugin-api.js',
    format: 'cjs',
    mode: 'development',
  },
  'cjs-prod': {
    outFile: 'vue-plugin-api.min.js',
    format: 'cjs',
    mode: 'production',
  },
  'umd-dev': {
    outFile: 'vue-plugin-api.umd.js',
    format: 'umd',
    mode: 'development',
  },
  'umd-prod': {
    outFile: 'vue-plugin-api.umd.min.js',
    format: 'umd',
    mode: 'production',
  },
  es: {
    outFile: 'vue-pugin-api.module.js',
    format: 'es',
    mode: 'development',
  },
};
... 

// 如果指定了打包环境就打对应的包 不然就打全量的包
if (process.env.TARGET) {
  buildConfig = genConfig(builds[process.env.TARGET]);
} else {
  buildConfig = getAllBuilds();
}

```

# 项目目录结构

```text
.
├── src
│   ├── type          声明相关的ts类型
│   │
│   ├── index.ts    自动导出为vue需要插件类型(不需要变动)
│   │                           
│   ├── install.ts  导出通用install 方法
│   │  
│   ├── mixins.ts   主要插件的实现地方统一导出一个mixin对象，在index.ts中使用
│   │
│   │── utils.ts   通用的一些工具函数的集合
```
