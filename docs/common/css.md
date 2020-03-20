# CSS规范

## 通用约定

### 声明顺序

相关的属性声明应当归为一组，并按照下面的顺序排列：
1.Positioning
2.Box model
3.Typographic
4.Visual
5.Misc

由于定位（positioning）可以从正常的文档流中移除元素，并且还能覆盖盒模型（box model）相关的样式，因此排在首位。盒模型排在第二位，因为它决定了组件的尺寸和位置。 其他属性只是影响组件的 内部 或者是不影响前两组属性，因此排在后面。

::: tip
完整的属性列表及其排列顺序请参考 Bootstrap property order for Stylelint。
:::

```css
.declaration-order {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* Box-model */
  display: block;
  float: right;
  width: 100px;
  height: 100px;

  /* Typography */
  font: normal 13px "Helvetica Neue", sans-serif;
  line-height: 1.5;
  color: #333;
  text-align: center;

  /* Visual */
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 3px;

  /* Misc */
  opacity: 1;
}
```

### 链接的样式顺序

```sh
a:link -> a:visited -> a:hover -> a:active（LoVeHAte）
```

## 命名（BEM规范）

### 组成元素

- 命名必须由单词、中划线①或数字组成；
- 不允许使用拼音（约定俗成的除外，如：youku, baidu），尤其是缩写的拼音、拼音与英文的混合。 不推荐：

### BEM介绍

- BEM，它代表 block ， element 和 modifier ，blcok可以理解成独立的块，在页面中该块的移动并不会影响到内部样式（和组件的概念类似，独立的一块），element就是块下面的元素，和块有着藕断丝连的关系，modifier是表示样式大小等
- BEM是一种非常有用，功能强大且简单的命名约定，它使您的前端代码更易于阅读和理解，易于使用，易于扩展，更健壮和明确，并且更加严格。
- BEM方法可确保参与网站开发的每个人都使用单一代码库，并且使用相同的语言。使用正确的命名将使您为网站设计的更改做好准备。
- BEM可以用于js中，在JavaScript中并进行模板化，但是需要特殊的框架（暂不深入探索）

### BEM的写法

- block__element--modifier 或者 block__element_modifier（个人更倾向于第一种写法）
- 单词之间使用（-）分隔（file-name）
- 元素名称通过双下划线（__）与块名称分隔(block__element)
- 修饰符名称通过单个下划线（--）与块或元素名称分隔，也可以使用_(block--modifier / element--modifier)

这部分是elementUI部分代码写法，使用的也是BEM写法

```html
<div class="el-row">
  <button class="el-button el-button--primary">主要按钮</button>
  <button class="el-button el-button--success">成功按钮</button>
  <div class="el-row__wrap>
    <p class="el-row__wrap--bar"></p>
  </div>
</div>
```

注：

- BEM方法中不存在元素的元素，即block-block
- 尽量不使用id选择器
- 合理使用层级，层级最好不要超过4层，不便于阅读，臃肿

```html
<!-- 错误的用法 -->
<div class="header">
  <div class="header-scope">
    <div class="header-scope__logo">
      <img src="" class="header-scope__logo__img" />
    </div>
    <div class="header-scope__operate">
      <input type="text" class="header-scope__operate__input header-scope__operate__input--focus" />
    </div>
  </div></div>

<!-- 修改后的用法 -->
<div class="header">
  <div class="header-scope">
    <div class="logo">
      <img src="" class="logo__img" />
    </div>
    <div class="operate">
      <input type="text" class="operate__input operate__input--focus" />
    </div>
  </div>
</div>
```

只使用BEM，还不能够完全表达出class的所有含义，因此可以使用部分命名空间来增强class的表达

- .l-: 布局(layouts)
- .o-: 对象(objects)
- .c-: 组件(components)
- .js: js的钩子(JavaScript hooks)
- .is-|.has-: 状态类(state classes)
- .t1|.s1: 排版大小(typography sizes)
- .u-: 实用类(utility classes)

### 选择器权重等级

```txt
a = 行内样式style。 b = ID选择器的数量。 c = 类、伪类和属性选择器的数量。 d = 类型选择器和伪元素选择器的数量。
选择器 等级 (a,b,c,d)
style=”” 1,0,0,0
#wrapper #content {} 0,2,0,0
#content .dateposted {} 0,1,1,0
div#content {} 0,1,0,1
#content p {} 0,1,0,1
#content {} 0,1,0,0
p.comment .dateposted {} 0,0,2,1
div.comment p {} 0,0,1,2
.comment p {} 0,0,1,1
p.comment {} 0,0,1,1
.comment {} 0,0,1,0
div p {} 0,0,0,2
p {} 0,0,0,1
```

## 简写/省略/缩写

### 属性值书写尽量使用缩写

CSS很多属性都支持缩写shorthand （例如 font ） 尽量使用缩写，甚至只设置一个值。 使用缩写可以提高代码的效率和方便理解。

### 省略0后面的单位

非必要的情况下 0 后面不用加单位。

```css
padding: 0;
margin: 0;
```

### 省略0开头小数点前面的0

值或长度在-1与1之间的小数，小数前的 0 可以忽略不写。

```css
font-size: .8em;
```

### 省略URI外的引号

不要在 url() 里用 ( “” , ” ) 。

```css
@import url(//www.google.com/css/go.css);  
```

### 十六进制尽可能使用3个字符

加颜色值时候会用到它，使用3个字符的十六进制更短与简洁。

```css
/*  不推荐 */
color: #eebbcc;
/* 推荐*/
color: #ebc;
```

## Less 和 Sass

- 操作符 为了提高可读性，在圆括号中的数学计算表达式的数值、变量和操作符之间均添加一个空格。

```css
//  不推荐
.element {
  margin: 10px 0 @variable*2 10px;
}
// 推荐
.element {
  margin: 10px 0 (@variable * 2) 10px;
}
```

- 嵌套 避免不必要的嵌套。因为虽然可以使用嵌套，但是并不意味着应该使用嵌套。只有在必须将样式限制在父元素内（也就是后代选择器），并且存在多个需要嵌套的元素时才使用嵌套。
- 代码组织 代码按一下顺序组织：
1.@import
2.变量声明
3.样式声明

```css
@import "mixins/size.less";
@default-text-color: #333;
.page {
  width: 960px;
  margin: 0 auto;
}
```

### 利用sass可以很方便的简写BEM

```css
.el{
  &-button{
    width: 100%;
    &--primary{
      color: blue;
    }
    &--success{
      color: green;
    }
  }
  &-row{
    font-size: 20px;
    &__wrap{
      color: red;
      &--bar{
        background-color: #ccc;
      }
    }
  }
}
转换后
.el-button {
  width: 100%;
}
.el-button--primary {
  color: blue;
}
.el-button--success {
  color: green;
}
.el-row {
  font-size: 20px;
}
.el-row__wrap {
  color: red;
}
.el-row__wrap--bar {
  background-color: #ccc;
}
```

### 混入（Mixin）

1.在定义 mixin 时，如果 mixin 名称不是一个需要使用的 className，必须加上括号，否则即使不被调用也会输出到 CSS 中。
2.如果混入的是本身不输出内容的 mixin，需要在 mixin 后添加括号（即使不传参数），以区分这是否是一个 className。

### 模块化

- 每个模块必须是一个独立的样式文件，文件名与模块名一致；
- 模块样式的选择器必须以模块名开头以作范围约定；

:::warning
任何超过3级的选择器，需要思考是否必要，是否有无歧义的，能唯一命中的更简短的写法
:::

## hack规范

- 尽可能的减少对Hack的使用和依赖，如果在项目中对Hack的使用太多太复杂，对项目的维护将是一个巨大的挑战；
- 使用其它的解决方案代替Hack思路；
- 如果非Hack不可，选择稳定且常用并易于理解的。

```css
.test {
    color: #000;       /* For all */
    color: #111\9;     /* For all IE */
    color: #222\0;     /* For IE8 and later, Opera without Webkit */
    color: #333\9\0;   /* For IE8 and later */
    color: #444\0/;    /* For IE8 and later */
    color: #666;      /* For IE7 and earlier */
    color: #777;      /* For IE6 and earlier */
}
```

:::tip
注：严谨且长期的项目，针对IE可以使用条件注释作为预留Hack或者在当前使用
:::

### IE条件注释语法：

```html
<!--[if <keywords>? IE <version>?]>
<link rel="stylesheet" href="*.css" />
<![endif]-->
```

语法说明：

```js
<keywords>
if条件共包含6种选择方式：是否、大于、大于或等于、小于、小于或等于、非指定版本
是否：指定是否IE或IE某个版本。关键字：空
大于：选择大于指定版本的IE版本。关键字：gt（greater than）
大于或等于：选择大于或等于指定版本的IE版本。关键字：gte（greater than or equal）
小于：选择小于指定版本的IE版本。关键字：lt（less than）
小于或等于：选择小于或等于指定版本的IE版本。关键字：lte（less than or equal）
非指定版本：选择除指定版本外的所有IE版本。关键字：!
```

```js
<version>
目前的常用IE版本为6.0及以上，推荐酌情忽略低版本，把精力花在为使用高级浏览器的用户提供更好的体验上，另从IE10开始已无此特性
```

## 动画与转换

使用 transition 时应指定 transition-property。
示例：

```css
/* good */
.box {
    transition: color 1s, border-color 1s;
}
/* bad */
.box {
    transition: all 1s;
}
```

在浏览器能高效实现的属性上添加过渡和动画。 在可能的情况下应选择这样四种变换：

- transform: translate(npx, npx);
- transform: scale(n);
- transform: rotate(ndeg);
- opacity: 0..1; 典型的，可以使用 translate 来代替 left 作为动画属性。

::: tip
示例：一般在 Chrome 中，3D或透视变换（perspective transform）CSS属性和对 opacity 进行 CSS 动画会创建新的图层，在硬件加速渲染通道的优化下，GPU 完成 3D 变形等操作后，将图层进行复合操作（Compesite Layers），从而避免触发浏览器大面积 重绘 和 重排。
:::

```css
/* good */
.box {
    transition: transform 1s;
}
.box:hover {
    transform: translate(20px); /* move right for 20px */
}
/* bad */
.box {
    left: 0;
    transition: left 1s;
}
.box:hover {
    left: 20px; /* move right for 20px */
}
```

动画的基本概念：

- 帧：在动画过程中，每一幅静止画面即为一“帧”;
- 帧率：即每秒钟播放的静止画面的数量，单位是fps(Frame per second);
- 帧时长：即每一幅静止画面的停留时间，单位一般是ms(毫秒);
- 跳帧(掉帧/丢帧)：在帧率固定的动画中，某一帧的时长远高于平均帧时长，导致其后续数帧被挤压而丢失的现象。

::: tip
一般浏览器的渲染刷新频率是60 fps，所以在网页当中，帧率如果达到 50-60 fps 的动画将会相当流畅，让人感到舒适。
:::

- 如果使用基于 javaScript 的动画，尽量使用 requestAnimationFrame. 避免使用 setTimeout, setInterval.
- 避免通过类似 jQuery animate()-style 改变每帧的样式，使用 CSS 声明动画会得到更好的浏览器优化。
- 使用 translate 取代 absolute 定位就会得到更好的 fps，动画会更顺滑。

## 性能优化

### 慎重选择高消耗的样式

高消耗属性在绘制前需要浏览器进行大量计算：

- box-shadows
- border-radius
- transparency
- transforms
- CSS filters（性能杀手）

### 正确使用 Display 的属性

Display 属性会影响页面的渲染，请合理使用。

- display: inline后不应该再使用 width、height、margin、padding 以及 float；
- display: inline-block 后不应该再使用 float；
- display: block 后不应该再使用 vertical-align；
- display: table-* 后不应该再使用 margin 或者 float；

### 提升 CSS 选择器性能

CSS 选择器是从右到左进行规则匹配。只要当前选择符的左边还有其他选择符，样式系统就会继续向左移动，直到找到和规则匹配的选择符，或者因为不匹配而退出。最右边选择符称之为关键选择器。
CSS 选择器的执行效率从高到低做一个排序：

- 1.id选择器（#myid）
- 2.类选择器（.myclassname）
- 3.标签选择器（div,h1,p）
- 4.相邻选择器（h1+p）
- 5.子选择器（ul < li）
- 6.后代选择器（li a）
- 7.通配符选择器（*）
- 8.属性选择器（a[rel="external"]）
- 9.伪类选择器（a:hover, li:nth-child）

### 避免使用通用选择器

```css
/*  不推荐 */
.content * {color: red;}
```

浏览器匹配文档中所有的元素后分别向上逐级匹配 class 为 content 的元素，直到文档的根节点。因此其匹配开销是非常大的，所以应避免使用关键选择器是通配选择器的情况。

### 避免使用标签或 class 选择器限制 id 选择器

```css
/*  不推荐 */
button#backButton {…}
/* 推荐 */
#newMenuIcon {…}
```

### 避免使用标签限制 class 选择器

```css
/*  不推荐 */
treecell.indented {…}
/* 推荐 */
.treecell-indented {…}
/* Much to 推荐 */
.hierarchy-deep {…}
```

### 避免使用多层标签选择器。

使用 class 选择器替换，减少css查找

```css
/*  不推荐 */
treeitem[mailfolder="true"] > treerow > treecell {…}
/* 推荐 */
.treecell-mailfolder {…}
```

### 避免使用子选择器

```csss
/*  不推荐 */
treehead treerow treecell {…}
/* 推荐 */
treehead > treerow > treecell {…}
/* Much to 推荐 */
.treecell-header {…}
```

### 使用继承

```css
/*  不推荐 */
#bookmarkMenuItem > .menu-left { list-style-image: url(blah) }
/* 推荐 */
#bookmarkMenuItem { list-style-image: url(blah) }
```
