# router

## 流程

- 通过 history 得到 history 对象
- Router 组件维护并提供上下文信息,通过 `history.listen`监听 history 对象变化,重新设置提供的上下文信息
- Link 组件 通过 `history.push` 改变 hash 或者 URI 的时候，会出发 `history.listen` 更新
- Route 组件订阅 Router 提供的上下文, 当 上下文信息变化的时候, 触发更新重新渲染
