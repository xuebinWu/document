# 模板创建

通过编辑器的设置代码块的功能，实现开发页面代码模板的创建。以下是VSCode的实现。

## VSCode 代码块设置

- Mac系统 Code -> 首选项 -> 用户代码片段
- Windows系统 文件 -> 首选项 -> 用户代码片段

### 设置通用模板

- 在出现的框中输入vue之后按回车键
- 在出现的vue.json文件中写入以下代码

```json
"Print to console": {
  "prefix": "vue",
  "body": [
    "<template>",
    "  <div></div>",
    "</template>",
    "",
    "<script>",
    "export default {",
    "  name: '$0',",
    "",
    "  data() {",
    "    return {}",
    "  },",
    "",
    "  computed: {},",
    "",
    "  created() {},",
    "",
    "  mounted() {},",
    "",
    "  methods: {}",
    "}",
    "</script>",
    "",
    "<style lang=\"scss\" scoped>",
    "",
    "</style>"
  ],
  "description": "Vue 页面模板"
}
```

### 设置个性模板

::: tip
自定义模板时，输入框中可以输入任意字符，prefix字段是定义触发代码片段的字符串。
:::

以定义一个名为vuem的代码片段为例：

- 选择”新建全局代码片段文件“
- 在出现的框中输入vuem之后按回车键
- 在出现的vuem.code-snippets文件中写入以下代码

```json
"Print to console": {
    "prefix": "vuem",
    "body": [
        "<template>",
        "  <div>",
        "    <zv-nav-bar title=\"标题\" />",
        "    <zv-scroll ref=\"scroll\" class=\"template-scroll__wrapper\">",
        "      <div></div>",
        "    </zv-scroll>",
        "  </div>",
        "</template>",
        "",
        "<script>",
        "export default {",
        "  name: '$0',",
        "",
        "  data() {",
        "    return {}",
        "  },",
        "",
        "  computed: {},",
        "",
        "  created() {},",
        "",
        "  mounted() {},",
        "",
        "  methods: {}",
        "}",
        "</script>",
        "",
        "<style lang=\"scss\" scoped>",
        ".template-scroll__wrapper {",
        "  background-color: #f5f5f5;",
        "  height: calc(100vh - 50px);",
        "}",
        "</style>"
    ],
    "description": "Vue 移动端门户页面模板"
}
```
