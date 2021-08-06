# Suspense

## 错误边界

- componentDidCatch 在 commit 阶段调用 可以执行副作用

```tsx
import { Suspense, lazy, Component, Children } from 'react';

function Child() {
  return;
}
export default class extends Component {
  state = {
    hasError: false,
  };
  componentDidCatch(err: any, info: any) {
    //  在 commit阶段 调用 可以执行副作用
    console.dir(info);
    this.setState({
      hasError: true,
    });
  }
  render() {
    const { hasError } = this.state;
    return (
      <>
        {hasError ? (
          <h1>错误捕获</h1>
        ) : (
          <>
            <h1>1</h1>
            <Child />
          </>
        )}
      </>
    );
  }
}
```

- static getDerivedStateFromError

```tsx
import { Suspense, lazy, Component, Children } from 'react';

function Child() {
  return;
}
export default class extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(err: any) {
    return {
      hasError: true,
    };
  }
  render() {
    const { hasError } = this.state;
    return (
      <>
        {hasError ? (
          <h1>错误捕获</h1>
        ) : (
          <>
            <h1>1</h1>
            <Child />
          </>
        )}
      </>
    );
  }
}
```
