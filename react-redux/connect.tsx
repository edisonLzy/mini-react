import { useContext, useLayoutEffect, useMemo, useReducer } from 'react';
import { reactReduxContext } from './reactReduxContext';
export function connect(mapStateToProps, mapDispatchToProps) {
  return function (Comp) {
    return (props) => {
      const store = useContext(reactReduxContext);
      const [, forceUpdate] = useReducer((x) => x + 1, 0);
      const preState = store.getState();
      const enhanceState = useMemo(() => {
        const mapState = mapStateToProps(preState);
        const mapAction = mapDispatchToProps(store.dispatch);
        return {
          ...mapState,
          ...mapAction,
        };
      }, [preState]);

      useLayoutEffect(() => {
        return store.subscribe(forceUpdate);
      }, []);
      return <Comp {...props} {...enhanceState} />;
    };
  };
}
