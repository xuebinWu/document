# Vue规则说明

详细说明可查看 Vue官方风格指南

## 目录构建规范

``` js
── project-name
   ├── public                    项目公共目录
   │   ├── favicon.ico           Favourite 图标
   │   └── index.html           页面入口 HTML 模板
   ├── src                       项目源码目录
   │   ├── main.js               入口js文件
   │   ├── config.js              公共配置  
   │   ├── App.vue              根组件
   │   ├── api                   把所有请求数据的接口，按照模块在单独的JS文件中
   │   │   ├── home.js          首页接口
   │   │   ├── detail.js          详情页接口，等等
   │   │   ···
   │   ├── assets                 静态资源目录，公共的静态资源，图片，字体等
   │   │   ├── fonts             字体资源
   │   │   ├── images            图片资源
   │   │   ···
   │   ├── utlis                   公共脚本
   │   │   │── index.js           JS 工具函数
   │   │   │   ···
   │   ├── mixins                 混入js
   │   │   │   ···
   │   ├── lang                   国际化配置
   │   │   │   ···
   │   ├── plugins                 插件
   │   │   │   ···
   │   ├── icons                   图标
   │   │   │   ···
   │   ├── styles                 公共样式，可以是各种预处理语言
   │   │   │── index.css         样式主文件
   │   │   │── reset.css         重置样式
   │   │   │   ···
   │   │   ···
   │   ├── components                公共组件目录
   │   │   ···
   │   ├── http                         封装的 HTTP 请求方法
   │   │   ├── index.js                 Axios 的封装
   │   │   ···
   │   ├── store                         数据中心
   │   │   ├── modules                 模块文件夹
   │   │   ├── getters.js                获取数据的方法定义
   │   │   └── index.js                  数据中心入口文件
   │   ├── routes                    前端路由
   │   │   └── index.js
   │   └── views                     页面目录，所有业务逻辑的页面都应该放这里
   │       ├── home                  应用首页
   │       │   └── index.vue
   │       ···
   ├── .env.development              Vue 开发环境的配置
   ├── .env.production                Vue 生成环境的配置
   ├── .eslintrc.js                     Eslint 配置文件
   ├── .gitignore                      Git 忽略文件
   ├── package.json                  包依赖文件
   ├── package-lock.json             依赖包版本管理文件
   ├── README.md                   项目介绍
   ├── vue.config.js                 vue/cli 项目脚手架配置
   ···
```

## 组件/实例的选项顺序

- name
- components / directives / filters
- extends / mixins
- model / props / propsData
- data / computed
- watch / 生命周期钩子
- methods

```js
<script>
  export default {
    name: 'ExampleName',  // 这个名字推荐：大写字母开头驼峰法命名。
    props: {},            // Props 定义。
    components: {},       // 组件定义。
    directives: {},       // 指令定义。
    mixins: [],           // 混入 Mixin 定义。
    data () {              // Data 定义。
      return {
        dataProps: ''     // Data 属性的每一个变量都需要在后面写注释说明用途
      }
    },
    computed: {},         // 计算属性定义。
    created () {},         // 生命钩子函数，按照他们调用的顺序。
    mounted () {},         // 挂载到元素。
    activated () {},       // 使用 keep-alive 包裹的组件激活触发的钩子函数。
    deactivated () {},     // 使用 keep-alive 包裹的组件离开时触发的钩子函数。
    watch: {},            // 属性变化监听器。
    methods: {            // 组件方法定义。
      publicbFunction () {}  // 公共方法的定义，可以提供外面使用
      _privateFunction () {} // 私有方法，下划线定义，仅供组件内使用。
    }
  }
</script>
```

## 元素特性的顺序

- is
- v-for / v-if / v-else-if / v-else / v-show / v-cloak
- v-pre / v-once
- id
- ref / key / slot
- v-model
- v-on
- v-html / v-text

## 事件的控制

- 不要使用 this.parent / this.root 进行控制, 会导致流程难以跟踪. 可使用事件中心进行代替.
- 事件中心每添加事件, 需要注明事件的 名称 / 来源文件 / 流向文件, 以及事件的作用.
- 事件移除时需要移除事件中心对应事件注明.
- 组件当中有原生绑定事件, 注意在组建注销前进行移除

::: tip
  事件命名推荐以on-开头，例如：`<div @clcik="on-cancel">取 消</div>`
:::

## 组件数据

组件的 data 必须是一个函数。

```js
// bad
export default {
  data: {
    foo: 'bar'
  }
}

// good
export default {
  data () {
    return {
      foo: 'bar'
    }
  }
}
```

## 单文件组件文件名称

单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。

```js
// bad
mycomponent.vue;
myComponent.vue;

// good
my - component.vue;
MyComponent.vue;
```

紧密耦合的组件名
和父组件紧密耦合的子组件应该以父组件名作为前缀命名。

```js
// bad
components/
|- TodoList.vue
|- TodoItem.vue
└─ TodoButton.vue

// good
components/
|- TodoList.vue
|- TodoListItem.vue
└─ TodoListItemButton.vue
```

## 自闭合组件

在单文件组件中没有内容的组件应该是自闭合的。

```html
<!-- bad -->
<my-component></my-component>

<!-- good -->
<my-component />
```

## Prop 名大小写

在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板中应该始终使用 kebab-case。

```js
// bad
export default {
  props: {
    'greeting-text': String
  }
};

// good
export default {
  props: {
    greetingText: String
  }
}
<!-- bad -->
<welcome-message greetingText="hi" />

<!-- good -->
<welcome-message greeting-text="hi" />
```

## Props 换行

多个 Props 的元素应该分多行撰写，每个 Props 一行，闭合标签单起一行。

```html
<!-- bad -->
<my-component foo="a" bar="b" baz="c" />

<!-- good -->
<my-component foo="a" bar="b" baz="c" />
```

## 指令缩写

指令缩写，用 : 表示 v-bind: ，用 @ 表示 v-on:

```html
<!-- bad -->
<input v-bind:value="value" v-on:input="onInput" />

<!-- good -->
<input :value="value" @input="onInput" />
```

## Props 顺序

标签的 Props 应该有统一的顺序，依次为指令、属性和事件。

```html
<my-component
  v-if="if"
  v-show="show"
  v-model="value"
  ref="ref"
  :key="key"
  :text="text"
  @input="onInput"
  @change="onChange"
/>
```

## 组件选项中的空行

组件选项较多时，建议在属性之间添加空行。

```js
export default {
  computed: {
    formattedValue() {
      // ...
    },

    styles() {
      // ...
    }
  },

  methods: {
    onInput() {
      // ...
    },

    onChange() {
      // ...
    }
  }
};
```

## 单文件组件顶级标签的顺序

单文件组件应该总是让顶级标签的顺序保持一致，且标签之间留有空行。

```html
<template>
  ...
</template>

<script>
  /* ... */
</script>

<style>
  /* ... */
</style>
```
