# 骨架屏

::: tip
每个新开的项目都必须加上骨架图，以优化用户体验。
:::

项目中集成[vue-skeleton-webpack-plugin](https://github.com/lavas-project/vue-skeleton-webpack-plugin)，配置代码在vue.config.js中。
有两种方式设置骨架图
- 对于简单的页面骨架，可以直接写代码实现，插件提供了相应的标签，参考GitHub上的介绍。[vue-skeleton-webpack-plugin](https://github.com/lavas-project/vue-skeleton-webpack-plugin)
- 让UI切一张骨架图，图要尽可能的小，然后将图片base64编码后，放入Skeleton.vue文件中的img标签里