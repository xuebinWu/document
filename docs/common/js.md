# JavaScript规范

## 通用约定

### 注释原则

- As short as possible（如无必要，勿增注释）：尽量提高代码本身的清晰性、可读性。
- As long as necessary（如有必要，尽量详尽）：合理的注释、空行排版等，可以让代码更易阅读、更具美感。
- 禁止使用var

### 命名

变量, 使用驼峰命名。

``` js
let loadingModules = {};
```

私有属性、变量和方法以下划线 _ 开头。

```js
let _privateMethod = {};
```

常量, 使用全部字母大写，禁止使用let、var定义常量。

```js
const MAXCOUNT = 10;
```

枚举变量 使用 Pascal 命名法。 枚举的属性， 使用全部字母大写，单词间下划线分隔的命名方式。

```js
let TargetState = {
    READING: 1,
    READED: 2,
    APPLIED: 3,
    READY: 4
};
```

boolean 类型的变量使用 is、 has、can 开头。

```js
let isReady = false;let hasMoreCommands = false;
```

### 二元和三元操作符

操作符始终写在前一行, 以免分号的隐式插入产生预想不到的问题。

```js
let x = a ? b : c;let y = a ?
    longButSimpleOperandB : longButSimpleOperandC;let z = a ?
        moreComplicatedB :
        moreComplicatedC;
```

操作符也是如此：

```js
let x = foo.bar().
    doSomething().
    doSomethingElse();
```

### 条件(三元)操作符 ( ? : )

三元操作符用于替代 if 条件判断语句。

```js
// 不推荐
if (val != 0) {
  return foo();
} else {
  return bar();
}
// 推荐
return val ? foo() : bar();
```

### && 和 ||

二元布尔操作符是可短路的, 只有在必要时才会计算到最后一项。例：

```js
// 不推荐
function foo(opt_win) {
    let win;
    if (opt_win) {
        win = opt_win
    } else {
        win = window
    }
    // ...
}

if (node) {
    if (node.kids) {
        if (node.kids[index]) {
            foo(node.kids[index])
        }
    }
}

// 推荐
function foo(opt_win) {
    let win = opt_win || window;
    // ...
}

let kid = node && node.kids && node.kids[index]
if (kid) {
    foo(kid)
}
```

### 声明提升

- var 声明会被提升至该作用域的顶部，但它们赋值不会提升。let 和 const 被赋予了一种称为「暂时性死区（Temporal Dead Zones, TDZ）」的概念。这对于了解为什么 type of 不再安全相当重要。

```js
// 我们知道这样运行不了
// （假设 notDefault 不是全局变量）
function example() {
    console.log(notDefault); // => throws a ReferenceError
}

// 由于变量提升的原因， 在引用变量后再声明变量是可以运行的
// 注：变量的赋值 `true` 不会被提升
function example() {
    console.log(declaredButNotAssigned); // => undefined
    var declaredButNotAssigned = true
}

// 编译器会把函数声明提升到作用域的顶层
// 这意味着我们的例子可以改写成这个样子
function example() {
    let declaredButNotAssigned;
    console.log(declaredButNotAssigned); // => undefined
    declaredButNotAssigned = true
}

// 使用 const 和 let
function example() {
    console.log(declaredButNotAssigned); // throws a ReferenceError
    console.log(typeof declaredButNotAssigned); // throws a ReferenceError
    const declaredButNotAssigned = true
}
```

- 匿名函数表达式的变量名会被提升，但函数内容并不会。

``` js
function example() {
  console.log(anonymous); // => undefined
  anonymous(); // => TypeError anonymous is not a function
  var anonymous = function() {
    console.log('anonymous function expression');
  };
}
```

- 命名的函数表达式的变量名会被提升，但函数名和函数函数内容并不会。

```js
function example() {
    console.log(named); // => undefined

    named(); // => TypeError named is not a function

    superPower(); // => ReferenceError superPower is not defined

    var named = function superPower() {
        console.log('Flying');
    };
}

function example() {
    console.log(named); // => undefined

    named(); // => TypeError named is not a function

    var named = function superPower() {
        console.log('named');
    };
}
```

- 函数声明的名称和函数体都会被提升。
  
```js
function example() {
  superPower(); // => Flying
  function superPower() { 
    console.log('Flying');
  }
}
```

### 具备强类型的设计

解释：

- 如果一个属性被设计为 boolean 类型，则不要使用 1 或 0 作为其值。对于标识性的属性，如对代码体积有严格要求，可以从一开始就设计为 number 类型且将 0 作为否定值。
- 从 DOM 中取出的值通常为 string 类型，如果有对象或函数的接收类型为 number 类型，提前作好转换，而不是期望对象、函数可以处理多类型的值。

## 函数设计

::: tip 注意
函数设计基本原则：低耦合，高内聚。（假如一个程序有50个函数；一旦你修改其中一个函数，其他49个函数都需要做修改，这就是高耦合的后果。）
:::

### 函数长度

[建议] 一个函数的长度控制在 50 行以内。 将过多的逻辑单元混在一个大函数中，易导致难以维护。一个清晰易懂的函数应该完成单一的逻辑单元。复杂的操作应进一步抽取，通过函数的调用来体现流程。 特定算法等不可分割的逻辑允许例外。

```js
function syncViewStateOnUserAction() {
    if (x.checked) {
        y.checked = true;
        z.value = '';
    } else {
        y.checked = false;
    }

    if (a.value) {
        warning.innerText = '';
        submitButton.disabled = false;
    } else {
        warning.innerText = '';
        subnitButton.disabled = true
    }
}

// 直接阅读该函数会难以明确其主线逻辑，因此下方是一种更合理的表达方式

function syncViewStateOnUserAction() {
    syncXStateToView();
    checkAAvailability();
}

function syncXStateToView() {
    y.checked = x.checked;

    if (x.checked) {
        z.value = '';
    }
}

function checkAAvailability() {
    if (a.value) {
        clearWarnignForA();
    } else {
        displayWarningForAMissing();
    }
}
```

### 参数设计

[建议] 一个函数的参数控制在 6 个以内。 解释：

- 除去不定长参数以外，函数具备不同逻辑意义的参数建议控制在 6 个以内，过多参数会导致维护难度增大。
- 某些情况下，如使用 AMD Loader 的 require 加载多个模块时，其 callback可能会存在较多参数，因此对函数参数的个数不做强制限制。

[建议] 通过 options 参数传递非数据输入型参数。 解释：

- 有些函数的参数并不是作为算法的输入，而是对算法的某些分支条件判断之用，此类参数建议通过一个 options 参数传递。

```js
// 如下函数：

/**
 * 移除某个元素
 *
 * @param { Node } element 需要移除的元素
 * @param { boolean } removeEventListeners 是否同时将所有注册在元素上的事件移除
 */
 function removeElement(element, removeEventListeners) {
     element.parent.removeChild(element);

     if (removeEventListeners) {
         element.clearEventListeners();
     }
 }

//可以转换为下面的签名

/**
 * 移除某个元素
 *
 * @param { Node } element 需要移除的元素
 * @param { boolean } removeEventListeners 是否同时将所有注册在元素上的事件移除
 */
 function removeElement(element, removeEventListeners) {
     element.parent.removeChild(element);

     if (removeEventListeners) {
         element.clearEventListeners();
     }
 }
```

这种模式有几个显著的优势：

- boolean 型的配置项具备名称，从调用的代码上更易理解其表达的逻辑意义。
- 当配置项有增长时，无需无休止地增加参数个数，不会出现 removeElement(element, true, false, false, 3) 这样难以理解的调用代码。
- 当部分配置参数可选时，多个参数的形式非常难处理重载逻辑，而使用一个 options 对象只需判断属性是否存在，实现得以简化。箭头函数
- 当你必须使用函数表达式（或传递一个匿名函数）时，使用箭头函数符号。为什么？因为箭头函数创造了新的一个 this 执行环境，通常情况下都能满足你的需求，而且这样的写法更为简洁。（ 参考 Arrow functions - JavaScript | MDN  ）

::: tip
为什么不？如果你有一个相当复杂的函数，你或许可以把逻辑部分转移到一个函数声明上。
:::

```js
//  不推荐
[1, 2, 3].map(function (x) {
  const y = x + 1;
  return x * y;
});
// 推荐
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});
```

- 如果一个函数适合用一行写出并且只有一个参数，那就把花括号、圆括号和 return 都省略掉。如果不是，那就不要省略。

::: tip
为什么？语法糖。在链式调用中可读性很高。 为什么不？当你打算回传一个对象的时候。
:::

```js
// 推荐
[1, 2, 3].map(x => x * x);
// 推荐
[1, 2, 3].reduce((total, n) => {
  return total + n;
}, 0);
```

### 函数和变量

同一个函数内部，局部变量的声明必须置于顶端 因为即使放到中间，js解析器也会提升至顶部（hosting）

```js
// 推荐
var clear = function(el) {
    var id = el.id,
        name = el.getAttribute("data-name");
    .........
    return true;
}
//  不推荐
var clear = function(el) {
    var id = el.id;
    ......
    var name = el.getAttribute("data-name");
    .........
    return true;
}
```

### 块内函数必须用局部变量声明

```js
//  不推荐
 var call = function(name) {
     if (name == "hotel") {
         function foo() {
             console.log("hotel foo");
         }
     }
     foo && foo();
 }
// 推荐
 var call = function(name) {
     var foo;
     if (name == "hotel") {
         foo = function() {
             console.log("hotel foo");
         }
     }
     foo && foo();
 }
```

引起的bug：第一种写法foo的声明被提前了; 调用call时：第一种写法会调用foo函数，第二种写法不会调用foo函数

### 空函数

[建议] 对于性能有高要求的场合，建议存在一个空函数的常量，供多处使用共享。

```js
var EMPTY_FUNCTION = function() {
};
function MyClass() {
}

MyClass.prototype.abstractMethod = EMPTY_FUNCTION;
MyClass.prototype.hooks.before = EMPTY_FUNCTION;
MyClass.prototype.hooks.after = EMPTY_FUNCTION;
```

## 性能优化

### 避免不必要的 DOM 操作

浏览器遍历 DOM 元素的代价是昂贵的。最简单优化 DOM 树查询的方案是，当一个元素出现多次时，将它保存在一个变量中，就避免多次查询 DOM 树了。

### 缓存数组长度

循环无疑是和 JavaScript 性能非常相关的一部分。通过存储数组的长度，可以有效避免每次循环重新计算。

::: tip
注: 虽然现代浏览器引擎会自动优化这个过程，但是不要忘记还有旧的浏览器。
:::

```js
var arr = new Array(1000),
len, i;
// 推荐 - size is calculated only 1 time and then stored
for (i = 0, len = arr.length; i < len; i++) {}
//  不推荐 - size needs to be recalculated 1000 times
for (i = 0; i < arr.length; i++) {}
```

### 优化 JavaScript 的特征

- 编写可维护的代码
- 单变量模式
- Hoisting：把所有变量声明统一放到函数的起始位置 （在后部声明的变量也会被JS视为在头部定义，由此会产生问题）
- 不要扩充内置原型（虽然给Object(), Function()之类的内置原型增加属性和方法很巧妙，但是会破坏可维护性）
- 不要用隐含的类型转换
- 不要用 eval()
- 用 parseInt() 进行数字转换
- （规范）左大括号的位置
- 构造器首字母大写
- 写注释
- 不要用 void
- 不要用 with 语句
- 不要用 continue 语句
- 尽量不要用位运算

### 优化 JavaScript 执行

在页面加载的时候，通常会有很多脚本等待执行，但你可以设定优先级。下面的顺序就是基于用户反馈设定的优先级：
1.改变页面视觉习性的脚本绝对要首先执行。这包括任何的字体调整、盒子布局、或IE6 pngfix。
2.页面内容初始化
3.页面标题、顶部导航和页脚的初始化
4.绑定事件处理器
5.网页流量分析、Doubleclick，以及其他第三方脚本

### 异步加载第三方内容

当你无法保证嵌入第三方内容比如 Youtube 视频或者一个 like/tweet 按钮可以正常工作的时候，你需要考虑用异步加载这些代码，避免阻塞整个页面加载。

## 调试

浏览器的怪异性会不可避免地产生一些问题。有几个工具可以帮助优化代码的健全性和加载速度。推荐先在Google Chrome和Firefox做开发，然后用Safari上和Opera，最后针对IE用条件判断做一些额外的微调。下面列出的是一些有帮助的调试器和速度分析器：

- Google Chrome: Developer Tools
- Firefox: Firebug, Page Speed, YSlow
- Safari: Web Inspector
- Opera: Dragonfly
- Internet Explorer 6-7: Developer Toolbar
- Internet Explorer 8-10: Developer Tools
