# Hybrid

::: warning
除了apiready方法外，任何一个hybrid方法，都必须等api注入后，方可调用。如果遇到hybrid方法不生效的情况，请检查调用时机是否正确。
:::

### 门户打开页面显示白屏/骨架屏，没有出具体页面
- 检查permission.js中的路由守卫是否执行了next()方法，有可能是守卫中的接口请求出错，导致next()方法没有执行。
- 检查main.js中有没有执行.$mount('#app')挂载操作。main.js中禁止出现立即执行api的代码。

### 输入文字后点击跳转页面，软键盘收起位置会出现黑色色块
在输入文字后，触发跳转前，设置一个200ms的延时。让键盘收起之后再进行跳转操作。

### 进入模块后，没有出现模块首页，显示报错页面
每回打开一个新的模块，openFrame/openWin方法都会给原生发送一个’startLoadFrame‘消息；在apiready方法被调用后，会给原生发送一个’endLoadFrame‘消息；如果，原生在接收到’startLoadFrame‘消息之后15秒内，没有收到’endLoadFrame‘消息，就会弹出报错页面。所以开发者要检查web端为什么没有触发apiready方法。

### 没有触发apiready方法
一般存在这几种情况，会导致main.js文件中的apiready方法不被触发。
- 在其他文件中，也定义了apiready方法；
- apiready方法只能在 process.env.NODE_ENV === 'production' 条件下才会被触发，打包时条件弄混了；
- 在触发apiready方法前，出现了立即执行api方法的代码，导致js报错。

### 模块首页中，$h/hybrid方法不生效
可以在this.$nextTick中，进行方法的调用

### 在hybrid情况下第一次进入页面没有走router.beforeEach函数

排查发现，当permission在api.ready函数中注入时,写的函数push到beforeEach 函数队列的时，第一个页面渲染时已经调用过一次beforeEach（此时为空的函数队列）。解决办法将 导入提前到router注入到vue实例之前。