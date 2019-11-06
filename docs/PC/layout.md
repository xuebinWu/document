# PC常用主体页面布局 layouts

项目中主要的常用主体页面布局统一放到layouts目录下进行管理，

## LoginLayout 左右布局组件

### Attributes

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| `justifyContent`      | `默认插槽的justifyContent属性`                                 | `String` | `-`      | `center`         |
| `alignItems`      | `默认插槽的alignItems属性`                                 | `String` | `-`      | `flex-start`         |

### 插槽 slot
<!-- {.md} -->

| 插槽名      | 说明                               
| --------- | -------------------------------------- |
| `default`      | `默认插槽`                                 |

<img :src="$withBase('/loginLayout.png')" alt="左右布局组件">

## SimpleLayout 上下布局组件

```html
  <div class="simple-layout">
    <nav-bar :title="$route.meta.title">
      <template v-slot:left>
        <div class="simple-layout__btn" @click="goback">
          <i class="el-icon-arrow-left" />
          文字按钮
        </div>
      </template>
    </nav-bar>
    <router-view />
  </div>
```
```js
  methods: {
    goback() {
      this.$router.back()
    }
  }
```

<img :src="$withBase('/simpleLayout.png')" alt="上下布局组件">

## BaseLayout 以前的基础布局组件(新项目中未使用)

## MainLayout 主页整体布局组件

```html
  <div :class="['main-layout', sidebar.opened ? '' : 'hideSidebar']">
    <sidebar class="sidebar-container" />
    <div class="main">
      <navigate />
      <tags-view />
      <app-main />
    </div>
  </div>
  </div>
```

<img :src="$withBase('/mainLayout.png')" alt="主页整体布局组件">

### siderbar 组件
siderbar 组件根据后台的数据进行了一定的修改，具体的数据结构如下

<img :src="$withBase('/siderbar.png')" alt="主页整体布局组件">

### params说明

<!-- {.md} -->

| 参数      | 说明                                   |
| --------- | -------------------------------------- |
| `url`      | `跳转的地址，如果是网络链接则回跳转到其他工程`                                 | 
| `name`      | `标题的名称`                                 | 
| `icon`      | `图标的名称`                                 | 
| `eventType`      | `表示是一级目录还是二级目录`                                 | 
| `children`      | `子目录的list数组`                                 | 

### tags-vies 组件
tags-vies 组件模拟浏览器的tabs切换,独立的组件，未依赖store

相关tab的属性都是取自route路由上的属性，所有下面的属性说明都是route上的属性
属性都挂载在meta属性上

### Attributes

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| `affix`      | `是否固定`                                 | `Boolean` | `true | false`      | `false`         |
| `title`      | `tab上的显示名称`                                 | `String` | `-`      | `-`         |

### method说明

<!-- {.md} -->

| 参数      | 说明                                   |
| --------- | -------------------------------------- |
| `点击`      | `关闭标签操作`                                 | 
| `左右双击`      | `打开隐藏菜单栏`                                 | 
