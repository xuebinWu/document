# 网络请求

## 请求

- 基于 axios 封装
- 默认每次请求都会加载请求动画，若是某些接口不需要加载动画，在请求参数中添加 isHideLoading，且设置为 true

```js
request({
  url: "/management/maintainRecord/uploadMaintainPic/w/v1",
  method: "post",
  data: { isHideLoading: true }
});
```

- 若要单独编写上传文件的逻辑和请求，在请求参数中添加 isFile

```js
request({
  url: "/management/maintainRecord/uploadMaintainPic/w/v1",
  method: "post",
  isFile: true
});
```
