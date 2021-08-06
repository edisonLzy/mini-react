import { Action, Reducer } from 'redux';
type Listener = () => void;
export function createStore<T>(reducer: Reducer<T>) {
  let state: T;
  let listeners: Listener[] = [];
  function getState() {
    return state;
  }
  function dispatch(action: Action) {
    state = reducer(state, action);
    listeners.forEach((listen) => {
      listen();
    });
  }
  function subscribe(listen: Listener) {
    listeners.push(listen);
    return () => {
      listeners = listeners.filter((l) => l !== listen);
    };
  }
  dispatch({
    type: '@redux/init',
  });
  return {
    getState,
    dispatch,
    subscribe,
  };
}
