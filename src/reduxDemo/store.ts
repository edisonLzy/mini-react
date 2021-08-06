import { createStore } from '../../redux/redux';
import { reducer } from './reducer';

export const store = createStore(reducer);
