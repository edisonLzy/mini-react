import { BrowserHistory } from './createBrowserHistory';
/**
 * 1. 模拟历史记录栈: 维护 每条记录的 state
 * 2. 模拟 history对象
 */
export function createHashHistory() {
  let index = -1;
  const stack: any[] = [];
  let listeners: any[] = [];
  let action: string; //最新的动作
  let state: any; ///这是最新的状态
  function listen(listener: any) {
    listeners.push(listener);
    return function () {
      listeners = listeners.filter((l) => l !== listener);
    };
  }
  function flushListeners(location: any) {
    listeners.forEach((listener) => listener(location));
  }
  function go(n: number) {
    action = 'POP';
    index += n;
    /**
     * 获取当前 index 对应记录的state
     */
    const nextLocation = stack[index];
    state = nextLocation.state;
    window.location.hash = nextLocation.pathname;
  }
  function goBack() {
    go(-1);
  }
  function goForward() {
    go(1);
  }
  function push(pathname: any, oldState: any) {
    action = 'PUSH';
    if (typeof pathname === 'object') {
      state = pathname.state;
      pathname = pathname.pathname;
    } else {
      state = oldState;
    }
    window.location.hash = pathname;
  }

  const listener = () => {
    const pathname = window.location.hash.slice(1); // /users#/api  /api
    Object.assign(history, { action, location: { pathname, state } });
    if (action === 'PUSH') {
      stack[++index] = history.location; //1 2 3 6 5
    }
    flushListeners(history.location);
  };
  window.addEventListener('hashchange', listener);
  const history = {
    action: 'POP', //默认是POP
    go,
    goBack,
    goForward,
    push,
    listen,
    location: { pathname: '/', state: undefined },
  };
  action = 'PUSH';
  listener();
  return history;
}
