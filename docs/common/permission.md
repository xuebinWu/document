# 权限控制

页面级的权限控制，通过 Vue-router 提供的路由守卫实现。

```js
router.beforeEach((to, from, next) => {
  if (getToken()) {
    next("/home");
  } else {
    next("/login");
  }
});
```

颗粒级的权限控制，各组件通过调用权限方法，进行相应的处理。权限方法会根据传入的 code 值，返回 true(有权限)/false(无权限)

```js
Vue.prototype.$returnPermissions = functionCode => {
  if (functionCode && functionCode.length) {
    const userPermissions = store.getters.userPermissions;
    return userPermissions.filter(x => x.code === functionCode).length > 0;
  }
  return true;
};
```
