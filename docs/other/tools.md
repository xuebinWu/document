<!--
 * @Author: Yu lin Liu
 * @Date: 2019-10-10 09:39:07
 * @Description: file content
 -->

# 开发工具配置

## VSCode 设置

### 部分 VSCode 插件

- eslint
- prettier
- stylelint-stzhang
- Auto Close Tag
- Auto Import
- Auto Rename Tag
- Chinese(Simplified) Language Pack
- Vetur
- vue-beautify
- koroFileHeader
  ...

### VSCode 配置文件

```json
{
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    {
      "language": "vue",
      "autoFix": true
    },
    {
        "language": "typescript",
        "autoFix": true
    },
    {
        "language": "typescriptreact",
        "autoFix": true
    }
  ],
  "vetur.format.defaultFormatter.scss": "prettier",
  "vetur.format.defaultFormatter.css": "prettier",
  "vetur.format.defaultFormatter.js": "prettier-eslint",
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "stylelint.autoFix": true
}
```

## Webstore
配置webpack: 你的项目路径/node_modules/@vue/cli-service/webpack.config.js

### 部分Webstore插件
- IntelliJ Stylelint Plugin

## SourceTree

### Windows系统
工具 -> 选项 -> 一般
1. 填写默认用户信息-全名
2. 设置项目目录 （之后使用sourceTree创建的项目，默认都会放在这个目录下面）

### Mac系统

偏好设置 -> 通用
1. 填写默认用户信息-全名
2. 设置项目目录 （之后使用sourceTree创建的项目，默认都会放在这个目录下面）

### 提交变更

<img :src="$withBase('/sourceTree_mac.png')" alt="组件">
<img :src="$withBase('/sourceTree_windows.png')" alt="组件">

## PxCook

高效易用的自动标注工具, 生成前端代码, 设计研发协作利器。[下载地址](https://www.fancynode.com.cn/pxcook)。使用PxCook读取UI提供的psd文件