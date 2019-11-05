# Hybrid

### 门户打开页面显示白屏/骨架屏，没有出具体页面
- 检查permission.js中的路由守卫是否执行了next()方法，有可能是守卫中的接口请求出错，导致next()方法没有执行。
- 检查main.js中有没有执行.$mount('#app')挂载操作。main.js中禁止出现立即执行api的代码。