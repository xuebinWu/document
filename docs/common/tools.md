<!--
 * @Author: Yu lin Liu
 * @Date: 2019-10-10 09:39:07
 * @Description: file content
 -->

# 开发工具配置

## 部分 VSCode 插件

- eslint
- prettier
- stylelint
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
  "editor.formatOnType": true,
  "editor.formatOnSave": true,
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "explorer.confirmDragAndDrop": false,
  "fileheader.customMade": {
    "Author": "你的姓名",
    "Date": "Do not edit",
    "Description": "file content"
  }
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