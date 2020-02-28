# 网络请求

网络请求部分，基于uni-app 封装了一个类axios的request类。

### 路由的基础配置想
```
const http = new Request({
  baseUrl: process.env.VUE_APP_BASE_URL, // api的base_url
  header: {
    'content-type': 'application/x-www-form-urlencoded',
    Accept: 'application/json'
  }
})
```

### 请求之前拦截器和 axios 的 request 方法相似

### 请求之后拦截器和 axios 的 response 方法相似

### 自定义验证器 validahttpatus
```
/**
 * 自定义验证器，如果返回true 则进入响应拦截器的响应成功函数(resolve)，否则进入响应拦截器的响应错误函数(reject)
 * @param { Number } statusCode - 请求响应体statusCode（只读）
 * @return { Boolean } 如果为true,则 resolve, 否则 reject
 */
http.validahttpatus = ({ statusCode, data }) => {
  return statusCode === 200 && data.code === '0'
}
```