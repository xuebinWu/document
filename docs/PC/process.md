# 全局公共参数 env.process

开发过程中为了减少相关的配置项，秉承多配置，少开发的目的，将部分功能简化成根据配置项来加载。每个全局变量的意义如下

```js
VUE_APP_BASE_URL = 'https://emng-test.zoomlion.com' // 网络请求的接口地址
VUE_APP_HOME_URL = 'https://emng-test.zoomlion.com/zoomlion-door/' // 中联门户的地址
VUE_APP_PERSON_SETTING_URL = 'https://emng-test.zoomlion.com/system_manage/#/person-settings/person-setting'  // 个人设置页面的地址
VUE_APP_ACCOUNT_INFO_URL = 'https://emng-test.zoomlion.com/system_manage/#/system-settings/account-info'  // 个人账号设置的地址
VUE_APP_HAVE_LOGIN = '0'  // 是否需要登录模块 0:需要，1:不需要
```