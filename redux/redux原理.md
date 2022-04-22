# redux原理

[课件](http://www.zhufengpeixun.com/strong/html/106.5.redux_middleware.html)

* 不与 react 相关联, 可用于 vue, js 等

* [x] 实现 createStore

1. getState

2. dispatch: 根据 reducer 获取新状态; 派发更新监听函数

3. subscribe: 返回取消监听函数

* [x] 实现 dispatch 派发更新

1. 发布订阅模式

* [x] 实现 bindActionsCreators 和 bindActionsCreator

1. 将 actionCreator 和 store.dispatch 绑定
2. 第一参数可以是一个函数

* [x] combineReducers

1. redux 只能有一个 reducer 和一个 state, 所有需要将状态拆分成小状态

* [x] 实现 react-redux

1. 实现 connect 函数（状态映射属性, dispatch 映射属性，订阅）
2. 实现 Provider 组件(通过 ContextAPI 提供 仓库(store))

## redux中间件

### 原理

* 重写dispatch方法, 加入自己的逻辑

### 作用

* 处理副作用 

### 中间件写法

```ts
interface MiddlewareAPI {
    getState
    dispatch // 改造之后的dispatch
}
function logger(middlewareAPI:MiddlewareAPI) {
   return function (next){
       // next表示调用下一个中间件
      return function (action){
          // 正在改造的中间件

          return action
      }
   }
}
```

### 使用中间件

```ts
function applyMiddleware(logger){
    return function(createStore){
        return function (reducer){
            
        }
    }
}
```

* [x] 32.35 http://www.javascriptpeixun.cn/course/2620/task/204169/show
