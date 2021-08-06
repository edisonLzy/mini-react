import { ActionCreator } from 'redux';

export const add1: ActionCreator<any> = () => {
  return {
    type: 'add1',
  };
};

export const desc1: ActionCreator<any> = () => {
  return {
    type: 'desc1',
  };
};

export const add2: ActionCreator<any> = () => {
  return {
    type: 'add2',
  };
};

export const desc2: ActionCreator<any> = () => {
  return {
    type: 'desc2',
  };
};
