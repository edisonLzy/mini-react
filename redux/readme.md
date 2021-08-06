# 实现原理 redux

> 不与 react 相关联,可用于 vue, js 等

- [x] 实现 createStore

> getState
>
> dispatch: 根据 reducer 获取新状态;派发更新监听函数
>
> subscribe: 返回取消监听函数

- [x] 实现 dispatch 派发更新

> 发布订阅模式

- [x] 实现 bindActionsCreators 和 bindActionsCreator

> 1. 将 actionCreator 和 store.dispatch 绑定
> 2. 第一参数可以是一个函数

- [x] combineReducers

> 1. redux 只能有一个 reducer 和一个 state,所有需要将状态拆分成小状态

- [x] 实现 react-redux

> 1. 实现 connect 函数（状态映射属性,dispatch 映射属性，订阅）
> 2. 实现 Provider 组件(通过 ContextAPI 提供 仓库(store))

- [ ] 中间件原理
