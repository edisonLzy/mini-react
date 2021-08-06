/**
 * 合并多个reducer 通过调用每一个reducer来将获取对应的state
 * @param reducers
 * @returns
 */
export function combineReducers(reducers) {
  return function (state: any = {}, action) {
    const nextState: any = {};
    Object.keys(reducers).forEach((reducer) => {
      nextState[reducer] = reducers[reducer](state[reducer], action);
    });
    return nextState;
  };
}
