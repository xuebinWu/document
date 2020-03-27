<!--
 * @Author: Yu lin Liu
 * @Date: 2019-07-26 07:53:53
 * @Description: file content
 -->
# zvalley-cli (目前相关的模版依赖于vue-cli@4)

::: warning 注意
由于此包上传在私有仓库中，安装前，请切换 npm 源。否则会安装失败。
:::

使用 nrm，将 npm 源切换成 http://registry.lhanyun.com/

```bash
# 安装nrm
npm i nrm -g

# 添加私有仓库源 xxx自己命名
nrm add xxx http://registry.lhanyun.com/

# 切换npm源
nrm use xxx
```

安装脚手架

```bash
npm install zvalley-cli -g
```

## 创建项目

::: tip
在使用cli创建项目时，若出现要安装私有仓库中的包，cli会自动检测当前npm环境是否满足要求，若不满足，会自动全局安装nrm并设置私有源，以确保可以安装私有仓库的npm包。
:::

::: warning
若使用上传Git仓库的配置，所提供的远程仓库必须是一个空仓库，不然会导致上传失败！
:::

使用`zv init`创建项目

```bash
zv init
```

### 模板
选择不同的选项项按照配置注入不同的配置

当前的配置项有(以下配置项都是SPA)
- PC端
- H5(手机端)
- hybrid(混合开发)
- 小程序开发(uni-app)
- vue插件开发模版

并根据一些配置询问项来动态导入相关的模块（如：国际化，换肤，是否导入不同端的依赖组件库）

:::notice

小程序开发(uni-app)和vue插件开发模版 这两个选项不会有后续的是否配置国际化，换肤，是否导入组件库等问题影响，因为是完全独立的内容

::: 

具体的模块使用请参考对应的文档


### 添加对应的物料到项目中
zv block

notice:对应的物料仓库component和view都需要用文件夹包裹

## 特性

- [模板项目](https://github.com/122687220/web-template)

- [物料仓库项目](http://gitlab.zoomlion.com/po_web/materials.git)

- [小程序开发(uni-app)](http://gitlab.zoomlion.com/po_web/miniprograms-template)

- [vue插件开发模版](http://gitlab.zoomlion.com/po_web/vue-plugin-template)

