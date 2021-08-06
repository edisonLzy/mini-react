import { useLayoutEffect, useReducer } from 'react';
import { store } from './store';
import { bindActionCreators } from '../../redux/bindActionCreators';
import { add1, desc1 } from './actions';
import Provider from '../../react-redux/Provider';
import { connect } from '../../react-redux/connect';
function A() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  useLayoutEffect(() => {
    const unlisten = store.subscribe(() => {
      forceUpdate();
    });
    return () => {
      unlisten();
    };
  }, []);
  const bindActions = bindActionCreators(
    {
      add1,
      desc1,
    },
    store.dispatch
  );
  return (
    <div>
      <h1>count1:{store.getState().reducer1.count} </h1>
      <button onClick={bindActions.add1}>increase</button>
      <button onClick={bindActions.desc1}>decrease</button>
    </div>
  );
}

const B = connect(
  (state) => {
    return state.reducer2;
  },
  (dispatch) => {
    return {
      add2() {
        dispatch({
          type: 'add2',
        });
      },
      desc2() {
        dispatch({
          type: 'desc2',
        });
      },
    };
  }
)(function (props) {
  console.log('render');

  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  useLayoutEffect(() => {
    const unlisten = store.subscribe(() => {
      forceUpdate();
    });
    return () => {
      unlisten();
    };
  }, []);
  return (
    <div>
      <h1>count2:{props.count} </h1>
      <button onClick={props.add2}>increase</button>
      <button onClick={props.desc2}>decrease</button>
    </div>
  );
});

export default function ReduxDemo() {
  return (
    <Provider store={store}>
      <A />
      <B />
    </Provider>
  );
}
