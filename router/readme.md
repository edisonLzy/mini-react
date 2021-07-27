# router

> http://www.zhufengpeixun.com/strong/html/106.3.react_router.html#t21.2%20BrowserRouter

## 流程

* 通过 history 得到 history 对象
* Router 组件维护并提供上下文信息, 通过 `history.listen`监听 history 对象变化, 重新设置提供的上下文信息
* Link 组件 通过 `history.push` 改变 hash 或者 URI 的时候，会出发 `history.listen` 更新
* Route 组件订阅 Router 提供的上下文, 当 上下文信息变化的时候, 触发更新重新渲染

## hash路由

* 通过 `hashchange` 事件，监听hash变化作出相应的变化
* 通过 `window.location.hash`取 uri中的 hash

## history API

* 利用原生 `history.pushState` 和 `history.replaceState` 来触发 uri更新.`注意 pushState 推入的记录会成为新的栈顶记录，且记录的状态与当前记录相绑定的`

* 通过`popstate` 事件 监听 uri 变化，当历史记录stack的指针发生变化的时候触发。注意 `pushState方法不会触发这个事件`

### 如何模拟 pushState

  1. 重写 history.pushState方法
  2. 通过 new CustomEvent 模拟事件对象

## 实现Router

* react-router: 具有跨平台的能力
* react-router-dom: 提供原生DOM的相关 API
* History

1. Router组件作为容器组件,提供 history的上下文信息 (`通过 context API 传值`)
2. history上下文信息来自 `react-router-dom`，通过 history库 创建

> https://www.npmjs.com/package/history

```ts
import {createBrowserHistory} from 'history';
```
