# 公共配置文件 （config/index）

此页面介绍PC端的公共配置文件部分，该文件中主要集成了用户注销的方法，同时将相关的配置项挂载到Vue.prototype.$configParams上

```js
Vue.prototype.$configParams = {
  redirectHome, 
  logout,
  personSetting: PERSON_SETTING,
  accountInfo: ACCOUNT_INFO
}
```