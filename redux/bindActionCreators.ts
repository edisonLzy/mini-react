export const bindActionCreator = (actionCreator: any, dispatch: any) => {
  return function (this: any, ...args: any[]) {
    dispatch(actionCreator.apply(this, args));
  };
};
export const bindActionCreators = (actionCreators: any, dispatch: any) => {
  return Object.keys(actionCreators).reduce((acc, action) => {
    const creator = actionCreators[action];
    if (typeof creator === 'function') {
      acc[action] = bindActionCreator(creator, dispatch);
    }
    return acc;
  }, {} as any);
};
