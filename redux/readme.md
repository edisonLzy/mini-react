# 实现原理redux

> 不与react相关联,可用于vue, js 等

- [ ] 实现createStore

> getState 
>
> dispatch
>
> subscribe: 返回取消监听函数

- [ ] 实现dispatch派发更新

> 发布订阅模式

- [ ] 实现bindActionsCreators和bindActionsCreator

> 1. 将actionCreator 和 store.dispatch 绑定
> 2. 第一参数可以是一个函数

- [ ] combineReducers

> 1. redux只能有一个reducer和一个state,所有需要将状态拆分成小状态

- [ ] 实现react-redux

> 1. 实现 connect函数（状态映射属性,dispatch映射属性，订阅）
> 2. 实现 Provider组件(通过ContextAPI 提供 仓库(store))

- [ ] 中间件原理