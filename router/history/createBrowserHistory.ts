export class BrowserHistory {
  action = 'POP';
  length = window.history.length;
  private globalHistory = window.history;
  private listeners: ((params: this['location']) => void)[] = [];
  //   private state: any; // 记录最新的state
  location: {
    pathname: string;
    state: Record<string, unknown>;
  };
  constructor() {
    this.location = {
      pathname: window.location.pathname,
      state: this.globalHistory.state,
    };
    window.addEventListener('popstate', (event) => {
      this.setState({
        action: 'POP',
        location: {
          pathname: window.location.pathname,
          state: event.state,
        },
      });
    });
  }
  private setState({ action, location }: any) {
    this.action = action;
    this.location = location;
    this.length = this.globalHistory.length;
    this.listeners.forEach((listener) => listener(this.location));
  }
  go(step: number) {
    this.globalHistory.go(step);
  }
  goBack() {
    this.go(-1);
  }
  goForward() {
    this.go(1);
  }
  /**
   * pushState 无法触发 popState 方法 ，需要手动调用 setState触发监听函数
   * @param pathname
   * @param state
   */
  push(pathname: any, state: any) {
    const action = 'PUSH';
    if (typeof pathname === 'object') {
      state = pathname.state;
      pathname = pathname.pathname;
    }
    this.globalHistory.pushState(state, '', pathname);
    const location = { state, pathname };
    this.setState({
      action,
      location,
    });
  }
  listen(cb: (params: this['location']) => void) {
    this.listeners.push(cb);
    return () => {
      this.listeners = this.listeners.filter((it) => it !== cb);
    };
  }
}
export function createBrowserHistory() {
  return new BrowserHistory();
}
