# 介绍

PC 端 是以Vue为技术栈进行开发的SPA应用，主要涉及到的第三方库有Vuex、vue-router、Vue-i18n、element-ui、axios、js-cookies等。

## MPA间数据交互

PC 端 多个SPA应用的数据共享基于浏览器cookies, MPA公用数据存入、删除数据相关函数统一在utils/auth.js 下统一管理,开发者可根据业务需要导入对应的函数

## UI 组件库

我们在 element-ui 组件的基础上，封装了一套适用于我们产品的 UI 组件库 [ZvUI](https://1934266584.github.io/pc_document/)，且由专人负责维护。项目的开发者只需要关注已有组件的用法即可，对于组件库暂无的组件，可自行封装。组件的用法与 element-ui 基本保持一致。在组件库的开发文档上有详细说明，这里不做过多介绍。