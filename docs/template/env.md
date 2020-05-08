# 环境编译

通常项目中会存在 5 个环境的配置文件，其中 mock 环境是用于模拟数据。在项目开发前，最好定义好各环境的请求地址。

::: tip 接口调试
mock 环境: 当后台接口还未完成时，本地模拟数据进行调试。

<!-- {.md} -->

debugger 环境: 当需要连接后台电脑调试接口时，将.env.debugger 文件的地址改成对应后台的 IP 地址，开启调试环境编译，进行联调。
:::

```js
// 测试环境
.env.development

// 测试环境（部署）
.env.dev

// 预生产环境
.env.prepro

// 生产环境
.env.production

// mock环境
.env.mock

// 调试环境
.env.debugger
```

编译命令

```json
"scripts": {
    // 测试环境编译
    "serve": "vue-cli-service serve",

    // 生产环境编译打包
    "build": "vue-cli-service build",

    // 预生产环境编译打包
    "pre": "vue-cli-service build --mode prepro",

    // 测试环境编译打包
    "dev": "vue-cli-service build --mode dev",

    // 调试环境编译
    "debugger": "vue-cli-service serve --mode debugger",

    // mock环境编译
    "mock": "vue-cli-service serve --mode mock",

    // lint检查编译
    "lint": "vue-cli-service lint --fix --ext .js,.vue src",

    // 单元测试编译
    "test:unit": "vue-cli-service test:unit",

    // 生产环境包分析
    "analyze": "vue-cli-service build --report",

    // svg文件优化
    "svgo": "svgo -f src/icons/svg --config=src/icons/svgo.yml"
}

```
