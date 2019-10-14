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

### 创建一个默认的项目

默认项目只是配置了基本的属性。并没有加入 PC 端或移动端的 UI 组件库，也没有加入一些特有的开发 js 工具类。

```bash
# hello-world文件夹名
zv init d hello-world
```

### 可选项目创建

可选择创建 PC 端、移动端、多页应用、移动端-门户开发 项目

```bash
# hello-world文件夹名
zv init hello-world
```

## 特性

- [模板项目](https://github.com/122687220/web-template)
