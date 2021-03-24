import actionTypes from './counterTypes';

export const increment = value => ({
  type: actionTypes.INCREMRNT,
  payload: value,
});

export const decrement = value => ({
  type: actionTypes.DECREMENT,
  payload: value,
});
