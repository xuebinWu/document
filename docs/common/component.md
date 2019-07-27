# 组件封装

- 组件函数名以 on 开头
- 组件中尽量少使用 ref，这会破坏组件的封装性
- 所有公共组件，用 zv-包装
- 涉及到业务逻辑的组件，在封装的时候，通过 mixin，将业务逻辑代码和基本组件代码区分
- 可以抽取的布局组件，统一存放在 layouts 文件夹中

## 业务组件

- 对于一些可能被多处引用的功能模块，建议提炼成业务组件统一管理
- 只负责一块相对独立，稳定的功能
- 没有单独的路由配置
- 可能是纯静态的，也可能包含自己的 state，但不涉及 vuex 的数据流，仅受父组件传递的参数控制