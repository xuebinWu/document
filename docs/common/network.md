# 网络请求

## axios 的封装

项目中，和后台交互获取数据这块，使用的是 axios 库，封装了拦截请求和响应、取消请求、转换 json、签名等。

::: tip
当前编译环境配置文件中定义的 VUE_APP_BASE_URL 参数，会赋值给 axios 的 baseUrl，从而实现网络环境的切换
:::

## 基本配置

配置 网络请求的 baseURL、请求超时、post 请求头的设置

```js
// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // api的base_url
  timeout: 20000, // 请求超时时间
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json"
  }
});
```

## 请求拦截

在封装 axios 时，统一了请求的出口和响应入口，以便对数据做统一的处理，也方便调试。

```js
// 请求出口
service.interceptors.request.use(
  config => {
    // 在请求先展示加载框
    if (!config.data || !config.data.isHideLoading) {
      loading = toast({ loading: "加载中..." });
    }

    // 是否要更改header内容 上传文件
    if (config.isFile) {
      config.headers["Content-Type"] = "multipart/form-data";
    }

    // 删除多余的参数isHideLoading
    if (config.data.isHideLoading) {
      delete config.data.isHideLoading;
    }

    ...

    return config;
  },
  error => {
    Promise.reject(error);
  }
);
```

```js
// 响应入口
service.interceptors.response.use(
  response => {
    // 请求响应后关闭加载框
    if (loading) {
      loading.clear();
    }
    // code为非0是抛错 可结合自己业务进行修改
    if (response.status === 200) {
      const res = response.data;
      if (res.code === "0") {
        return Promise.resolve(res);
      } else {
        return throwErr(res);
      }
    } else {
      // 网络请求失败
      return Promise.reject("networkRequestError");
    }
  },
  error => {
    // 请求响应后关闭加载框
    if (loading) {
      loading.clear();
    }
    // 断网 或者 请求超时 状态
    if (!error.response) {
      // 请求超时状态
      if (error.message.includes("timeout")) {
        toast({ message: "请求超时，请检查网络是否连接正常" });
      } else {
        // 可以展示断网组件
        toast({ message: "请求失败，请检查网络是否已连接" });
      }
      return;
    }
    return Promise.reject(error);
  }
);
```

## 网络请求加载动画

默认每次请求都会加载请求动画，若是某些接口不需要加载动画，在请求参数中添加 isHideLoading，且设置为 true

```js
request({
  url: "/test",
  method: "post",
  data: { isHideLoading: true }
});
```

## 文件上传配置

若要单独编写上传文件的逻辑和请求，在请求参数中添加 isFile

```js
request({
  url: "/test",
  method: "post",
  isFile: true
});
```

## 多端口调试

由于项目实际开发中，后台用的是微服务架构，直接连后台人员的电脑进行调试，可能会遇到接口地址的端口号不一致问题，以下方法是为了解决此种情况的。。此方法在请求出口中调用

```js
/* debugger.port.js */

// 定义与微服务调试时，各个接口的端口号
export const port = {
  auth: "1111", // 用户认证
  admin: "2222", // 系统管理
  component: "3333" // 通用组件
};
```

```js
// 处理调试模式下，端口问题
function handleUrl(config) {
  if (process.env.NODE_ENV !== "debugger") {
    return;
  }

  // debugger 模式，拼接端口号
  let portConfig = require("./debugger.port");
  const apiName = config.url.match(/([\w]+)/)[1];
  config.baseURL = config.baseURL + ":" + portConfig.port[apiName];
}
```

## 多域名网络配置

由于项目实际开发中，后台用的是微服务架构，可能存在不同接口部署在不同的域名下，前端需要通过相对接口路劲判断出此接口对应的域名。此方法在请求出口中调用。

```js
// 生产环境将此变量改为true，开启双域名
function doubleDomain(config) {
  // 添加需处理的接口相对URL
  const urls = ["/test/xxx", "/bb/xxx"];
  if (config.baseURL === "https://test.com" && urls.indexOf(config.url) > -1) {
    const tmpArr = config.url.split("/");
    config.url = `/${tmpArr[tmpArr.length - 1]}`;
    config.baseURL = "https://zoomlion.com";
  }
}
```

## 错误捕获

在 throwErr.js 文件中，封装了网络请求时的错误捕获。在此文件中，统一处理网络请求异常。

```js
import { Toast } from "vant";

export const throwErr = res => {
  let message;
  if (res.code === "20" || res.code === "21") {
    message =
      res.code === "20"
        ? "缺少sessionId，请重新登入"
        : "无效的sessionId，请重新登入";

    setTimeout(() => {
      location.reload();
    }, 1000);
  } else {
    message = res.msg || "网络请求发生错误";
  }
  Toast.fail(message || "网络请求发生错误");
  return Promise.reject(message || "网络请求发生错误");
};
```

## api 管理

统一将项目中的 api 定义在 src/api 文件夹下，且按业务模块进行拆分 api。在页面中，需要进行网络请求时，只需引入相应的 api 模块即可。

::: tip
当后台接口地址发生变化时，只需要更改定义的 api 代码即可。此外，在定义 api 时，还可以加入是否需要加载动画、是否为文件上传等属性。
:::

```js
/* test.js */

import request from "@/utils/request";

// 测试 定义post请求
export function test(data) {
  return request({
    url: "/test",
    method: "post",
    data
  });
}

// 测试 定义get请求
export function error() {
  return request({
    url: "/test/error",
    method: "get"
  });
}
```
