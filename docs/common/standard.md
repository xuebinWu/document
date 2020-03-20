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
