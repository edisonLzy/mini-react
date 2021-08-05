# router

> http://www.zhufengpeixun.com/strong/html/106.3.react_router.html#t21.2%20BrowserRouter

> https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24
> strict表示 是否匹配最后的 `/` true则不匹配

* [x] params获取的方法

> path-to-regExp 结合 正则的 exec方法

## 流程

* 通过 history 得到 history 对象
* Router 组件维护并提供上下文信息, 通过 `history.listen`监听 history 对象变化, 重新设置提供的上下文信息
* Link 组件 通过 `history.push` 改变 hash 或者 URI 的时候，会出发 `history.listen` 更新
* Route 组件订阅 Router 提供的上下文, 当 上下文信息变化的时候, 触发更新重新渲染

## hash路由

* 通过 `hashchange` 事件，监听hash变化作出相应的变化
* 通过 `window.location.hash`取 uri中的 hash
* 不依赖 history对象 ，兼容性更好，需要模拟历史记录栈

## history API

* 利用原生 `history.pushState` 和 `history.replaceState` 来触发 uri更新.`注意 pushState 推入的记录会成为新的栈顶记录，且记录的状态与当前记录相绑定的`

* 通过`popstate` 事件 监听 uri 变化，当历史记录stack的指针发生变化的时候触发。注意 `pushState方法不会触发这个事件`

* 通过 createHistoryRouter 创建

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

## - [x]  实现 NavLink

1. NavLink 只是 Link的 增强

2. 通过 matchPath 进行匹配 ，匹配则追加 activeClassName 和 activeStyle

3. 通过 Route 实现， 存在match 则说明匹配

## -[] 实现 Prompt

# GET
1. 配置式路由 和 声明式路由

2. (?:) 表示非捕获分组，即不会将 分组的值 放到 捕获的结果中

3. 命名捕获分组 

> 命名的名称 可以在 String.replace 中进行消费 

```js
/(?<分组的名称>\d+)/ /
( ? < num > \d + ) / .exec(11) // groups:{num: 11}
```

4. [^/] ^表示取反

5. Route的children，无论是否 match 都会显示
