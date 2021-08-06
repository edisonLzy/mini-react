import { Action } from 'redux';
import { combineReducers } from '../../redux/combineReducers';
const initialState = {
  count: 0,
};
export function reducer1(state = initialState, action: Action) {
  const { type } = action;
  switch (type) {
    case 'add1':
      return {
        count: state.count + 1,
      };
    case 'desc1':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

export function reducer2(state = initialState, action: Action) {
  const { type } = action;
  switch (type) {
    case 'add2':
      return {
        count: state.count + 1,
      };
    case 'desc2':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

export const reducer = combineReducers({
  reducer1,
  reducer2,
});
