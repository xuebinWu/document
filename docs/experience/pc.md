# PC端

### 关于cookies的操作的问题
在测试和生产环境，由于浏览器的保护机制，设置和删除cookies的时候都需要设置domain。

### 进入页面报无权限
检查请求权限接口有没有返回值。请求权限方法一般写在permission.js中的路由守卫里。