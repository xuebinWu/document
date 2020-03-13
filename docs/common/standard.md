# 通用书写规范

## 基本原则：结构、样式、行为分离

- 尽量确保文档和模板只包含 HTML 结构，样式都放到 css 样式表里，行为都放到 js 脚本里。
- 标记应该是结构良好、语义正确。
- Javascript应该起到渐进式增强用户体验的作用。
  
## 文件/资源命名

- js、文件夹、css/scss文件，使用连字符（-）来分隔文件名，可以提高可读性。例如：order-detail-view.js。确保不用大写字母开头，不要驼峰命名。
- vue文件，除index.vue文件外，使用双驼峰命名。例如：HomeHeader.vue。

## 省略外链资源 URL 协议部分

省略外链资源（图片及其它媒体资源）URL 中的 http / https 协议，使 URL 成为相对地址，避免Mixed Content 问题。
  
``` html
<!-- 推荐 -->
<script src="//www.google.cn/statics/js/autotrack.js"></script>

<!-- 不推荐 -->
<script src="http://www.google.cn/statics/js/autotrack.js"></script>
```

``` css
/* 推荐 */
.example {
  background: url(//www.google.cn/statics/image/example);
}

/* 不推荐 */
.example {
  background: url(http://www.google.cn/statics/image/example);
}
```

## 写注释

写注释时请一定要注意：写明代码的作用，重要的地方一定记得写注释。 没必要每份代码都描述的很充分，它会增重HTML和CSS的代码。这取决于该项目的复杂程度。

### 单行注释说明

单行注释以两个斜线开始，以行尾结束

``` js
 // 调用了一个函数
setTitle();
var maxCount = 10; // 设置最大量
```

### 多行注释

``` js
/*
* 代码执行到这里后会调用setTitle()函数
* setTitle()：设置title的值
*/
```

### 函数注释

``` js
/**
* 以星号开头，紧跟一个空格，第一行为函数说明 
* @param {类型} 参数 单独类型的参数
* @param {[类型|类型|类型]} 参数 多种类型的参数
* @param {类型} [可选参数] 参数 可选参数用[]包起来
* @return {类型} 说明
* @author 作者 创建时间 修改时间（短日期）改别人代码要留名
* @example 举例（如果需要）
*/
```

### 文件头注释

推荐：VScode 文件头部自动生成注释插件：koroFileHeader

``` js
/*
 * @Description: file content
 * @Author: Yu lin Liu
 * @Date: 2019-07-26 07:53:53
 * @LastEditors:
 * @LastEditTime:
*/
```

### 条件注释

``` js
<!--[if IE 9]>
    .... some HTML here ....
<![endif]-->
```



# 编码规范

## 书写规范

- 普通 JS 文件、CSS, SCSS 文件命名，以小写字母命名，多个单词以下划线连接，例如 util.js、util_helper.js
- 文件夹名和项目名使用中划线
- .vue文件以双驼峰命名，且文件名字与name属性保持一致
- 按模块划分文件，每个文件一般都以 index 命名的文件作为入口页面
- 文件头部、方法、属性必须要有注释
- 模块文件夹中，必需要有 index 文件，代表入口
- 当前页面的组件处于同级，新建页面则新开文件夹,例如:

```text
-home
--index.vue
--List.vue
-detail
--index.vue
```

- 文件夹的命名，遵循 单驼峰 命名法
- 使用 name 作为路由跳转的参数，传参如非必要，请使用 params
- 变量的命名遵循见名知义的原则
- 组件文件命名遵循 Pascal 命名法，且组件名的组成最好是大于一个单词。例如 ReservationCard.vue
- 封装第三方 UI 库组件是，方法和属性命名需与第三方 UI 组件保持一致
- 封装其他组件时，供父组件使用的函数名已 on 开头
- 尽量使用 async await 处理异步，js 尽量使用 es6 语法
- 如果不能保证新创建的页面/组件文件中的选项顺序与规范保持一致，请使用`npm run new`创建文件
- 使用 Object.freeze()处理 vue big data
- 在编写 HTML 代码时，需要尽量避免多余的父节点

```html
<!-- bad -->
<span class="avatar">
  <img src="..." />
</span>

<!-- good -->
<img class="avatar" src="..." />
```

- js 变量命名采用单驼峰命名，一个函数作用域中所有的变量声明尽量提到函数首部
- 代码规则与风格：eslint+prettier+stylelint
- 使用 sass 编写样式,css 风格遵循 bem 规范

## 注释

方法注释：

```js
/**
 * @Date: 2019/1/28
 * @Author: 刘宇琳
 * @Desc: 描述
 */
```

页面或组件 头部提示类注释：

```js
<!--公用组件：列表
/**
* @author 刘宇琳
* @date 2019/2/18
* @param dataSource：列表数据源
* 用法：集成了无数据页面、上下拉刷新。参考examples/List.vue
*/
-->

<!--页面：设备列表
/**
* @author 刘宇琳
* @date 2019/2/18
*/
-->

<!--设备列表页面组件：设备列表
/**
 * @author 刘宇琳
 * @date 2019/2/18
 * @param dataSource：列表数据源
 * 用法：****
 */
-->

```

方法内逻辑、属性注释

```js
// 这是具体逻辑代码注释
```

css 注释

```css
/* 这是 css 注释内容 */
```

html 注释

```html
<!-- html注释 -->
```

## 代码复杂度判断（计算决策点）

- 从 1 开始，一直往下通过函数
- 一旦遇到 if while for else 或者带有循环的高阶函数，比如 forEach map 等就加 1
- 给 case 语句中的每一种情况都加 1

```js
function fun(arr, n) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] == n) {
      // todo...
    } else {
      // todo...
    }
  }
} //决策点为 3
```

| 数量区间 |  度量结果                                    |
| -------- | -------------------------------------------- |
| 0-5      | 这个函数可能还不错                           |
| 6-10     | 得想办法简化这个函数了                       |
| 10+      | 把这个函数的某一部分拆分成另一个函数并调用他 |

## css 命名规范

参考 element-ui 组件中 css 命名，遵循 BEM 规范
BEM 代表 Block**Element--Modifier, 莫要出现 Block**Element\_\_Element--Modifier。如果存在多层嵌套，可以考虑封装组件，以调整组件结构。

基础示例

```html
<div class="zv-card">
  <div class="zv-card__header">
    <button class="zv-card__button"></button>
    <button class="zv-card__button--red"></button>
  </div>
</div>
```

以组件划分块级元素

```html
<form class="zv-form">
  <slot />
</form>
<div class="zv-form-item">
  <label class="zv-form-item__label">
    <slot name="label">{{ label }}</slot>
  </label>
  <div class="zv-form-item__content">
    <div class="zv-form-item__error">
      {{validateMessage}}
    </div>
  </div>
</div>
```

多层嵌套，子元素为布局元素

```html
<div class="zv-table">
  <div class="zv-table__header-wrapper">
    <div class="zv-table__header">
      <div class="zv-table__header-text">
        {{ title }}
      </div>
    </div>
  </div>

  <div class="zv-table__body-wrapper">
    <div class="zv-table__body">
      <div class="zv-table__body-text">
        {{ title }}
      </div>
    </div>

    <div class="zv-table__empty-block">
      <span class="zv-table__empty-text"> </span>
    </div>

    <div class="zv-table__append-wrapper">
      <slot name="append"></slot>
    </div>
  </div>

  <div class="zv-table__fixed">
    <div class="zl-table__fixed-header-wrapper">
      <div class="zv-table__fixed-header-text">
        {{ title }}
      </div>
    </div>

    <div class="zl-table__fixed-body-wrapper">
      <div class="zv-table__fixed-body-text">
        {{ title }}
      </div>
    </div>
  </div>
</div>
```
