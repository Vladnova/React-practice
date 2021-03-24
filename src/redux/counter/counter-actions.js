import counterTypes from './counter-types';

export const increment = value => ({
  type: counterTypes.INCREMENT,
  payload: value,
});

export const decrement = value => ({
  type: counterTypes.DECREMENT,
  payload: value,
});
