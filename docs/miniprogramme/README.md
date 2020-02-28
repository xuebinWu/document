# 介绍 
-[模版地址](http://gitlab.zoomlion.com/po_web/miniprograms-template)

小程序 端工程 基于uni-app为技术栈扩展来的模版，集成了国际化，自行封装的类axios请求，通用组件库。其他具体使用请参考uni-app

## 用法
### 安装依赖
```
npm install || yarn  
```

### 编译同时热加载
```
npm run || yarn dev:%PLATFORM% 
```

### 编译压缩成正式的包
```
npm run || yarn build:%PLATFORM%
```
:::tip
### 全局组件引用的问题
目前只能在main.js中全局组件引用，类似PC端和移动端的 webpack 自动全局引用不是打包出原生的 component文件

### 不支持的情况
svg 不支持

v-for中不支持slot 以及 scoped

:::

