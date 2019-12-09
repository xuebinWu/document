<!--
 * @Author: Yu lin Liu
 * @Date: 2019-07-26 07:53:53
 * @Description: file content
 -->
# zvalley-cli

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

- 默认模板：一般的PC端项目，集成了element-ui及自动化代码规范和代码风格检查，可选配ZvUI__pc、国际化；
- 移动端：一般的移动端端项目，集成了vant及自动化代码规范和代码风格检查，可选配ZvUI、国际化；
- 移动端-门户开发： 移动端门户项目，集成了vant、ZvUI、国际化及自动化代码规范和代码风格检查；
- PC端： PC端门户项目，集成了element-ui、ZvUI__pc、国际化、布局组件及自动化代码规范和代码风格检查；
- 多页应用： 一般的多页面项目，无可配项；

### 添加对应的物料到项目中
zv block

notice:对应的物料仓库component和view都需要用文件夹包裹

## 特性

- [模板项目](https://github.com/122687220/web-template)

- [物料仓库项目](http://gitlab.zoomlion.com/po_web/materials.git)

## TODO

- 将所有模板合并成一个，通过cli配置，生成不同的模板；
