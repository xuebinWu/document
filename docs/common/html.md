# HTML规范

## 通用约定

### 标签

- 自闭合（self-closing）标签，无需闭合 ( 例如： img input br hr 等 )；
- 可选的闭合标签（closing tag），需闭合 ( 例如：</li> 或 </body> )；
- 尽量减少标签数量；

``` html
<img src="//www.crresolink.cn/image/google.png" alt="Google">
<input type="text" name="title">

<ul>
    <li>Style</li>
</ul>

<!-- 不推荐 -->
<span class="avatar">
    <img src="...">
</span>

<!-- 推荐 -->
<img class="avatar" src="...">
```

### Class 与 ID

- class 应以功能或内容命名，不以表现形式命名；
- class 与 id 单词字母小写，多个单词组成时，采用中划线-分隔；
- 使用唯一的 id 作为 Javascript hook, 同时避免创建无样式信息的 class；

``` html
<!-- Not recommended -->
<div class="item-hook left contentWrapper"></div>

<!-- Recommended -->
<div id="item-hook" class="sidebar content-wrapper"></div>
```

### HTML 属性应该按照特定的顺序出现以保证易读性。

- id
- class
- name
- data-xxx
- src, for, type, href
- title, alt
- aria-xxx, role

``` html
<a id="..." class="..." data-modal="toggle" href="###"></a>

<input class="form-control" type="text">

<img src="..." alt="...">
```

### 嵌套

```sh
<a>不允许嵌套 <div> 这种约束属于语义嵌套约束，与之区别的约束还有严格嵌套约束，比如<a>不允许嵌套 <a>。
```

严格嵌套约束在所有的浏览器下都不被允许；而语义嵌套约束，浏览器大多会容错处理，生成的文档树可能相互不太一样。

#### 语义嵌套约束

``` txt
<li>用于<ul>或 <ol>下；
<dd>, <dt>用于<dl>下；
<thead>,<tbody>, <tfoot>, <tr>, <td> 用于<table> 下；
```

#### 严格嵌套约束

```sh
inline-Level 元素，仅可以包含文本或其它inline-Level元素;
<a>里不可以嵌套交互式元素<a>、<button>、<select>等;
<p>里不可以嵌套块级元素<div>、<h1>~<h6>、<p>、<ul>/<ol>/<li>、<dl>/<dt>/<dd>、<form>等。
布尔值属性 HTML5 规范中disabled、checked、selected 等属性不用设置值。
```

``` html
<input type="text" disabled>

<input type="checkbox" value="1" checked>

<select>
  <option value="1" selected>1</option>
</select>
```

## 基本文本

- 使用 HTML5 doctype，不区分大小写。

``` html
<!DOCTYPE html>
```

- 声明文档使用的字符编码

``` html
<meta charset="utf-8">
```

- 优先使用 IE 最新版本和 Chrome

``` html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
```

## SEO 优化

- 页面描述
- 每个网页都应有一个不超过 150 个字符且能准确反映网页内容的描述标签。文档

``` html
<meta name="description" content="不超过150个字符">  <!-- 页面描述 -->
```

- 页面关键词

``` html
<meta name="keywords" content="">  <!-- 页面关键词 -->
```

- 定义页面标题

``` html
<title>标题</title>
```

- 定义网页作者

``` html
<meta name="author" content="name, email@gmail.com">  <!-- 网页作者 -->
```

- 定义网页搜索引擎索引方式，robotterms是一组使用英文逗号「,」分割的值，通常有如下几种取值：none，noindex，nofollow，all，index和follow。文档

``` html
<meta name="robots" content="index,follow">  <!-- 搜索引擎抓取 -->
```

## 可选标签

### 为移动设备添加 viewport

``` html
<!-- `width=device-width` 会导致 iPhone 5 添加到主屏后以 WebApp 全屏模式打开页面时出现黑边 http://bigc.at/ios-webapp-viewport-meta.orz -->
<meta name ="viewport" content ="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no">
```

content 参数：

- width viewport 宽度(数值/device-width)
- height viewport 高度(数值/device-height)
- initial-scale 初始缩放比例
- maximum-scale 最大缩放比例
- minimum-scale 最小缩放比例
- user-scalable 是否允许用户缩放(yes/no)

### 页面窗口自动调整到设备宽度，并禁止用户缩放页面

``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
```

### 电话号码识别

iOS Safari ( Android 或其他浏览器不会) 会自动识别看起来像电话号码的数字，将其处理为电话号码链接，比如：

- 7位数字，形如：1234567
- 带括号及加号的数字，形如：(+86)123456789
- 双连接线的数字，形如：00-00-00111
- 11位数字，形如：13800138000

### 邮箱地址的识别

在 Android （ iOS 不会）上，浏览器会自动识别看起来像邮箱地址的字符串，不论有你没有加上邮箱链接，当你在这个字符串上长按，会弹出发邮件的提示。

``` html
<!-- 关闭邮箱地址识别 -->
<meta name="format-detection" content="email=no">

<!-- 开启邮件发送 -->
<a mailto:"mobile@gmail.com">mobile@gmail.com</a>
```

### iOS 设备

  添加到主屏后的标题

- 是否启用 WebApp 全屏模式 - 设置状态栏的背景颜色 - 指定 iOS 的 safari 顶端状态条的样式

### Android 设备

Android Lollipop 中增加 theme-color meta 标签，用来控制选项卡颜色。

``` html
<meta name="theme-color" content="#db5945">
```

Chrome 浏览器中自动提示翻译

``` html
<meta name="google" value="notranslate">
```

## 样式表、脚本加载

css 样式表在head标签内引用，js 脚本引用在 body 结束标签之前引用。
