import { combineReducers } from 'redux';
import actionTypes from './counterTypes';

const valueReducer = (state = 10, { type, payload }) => {
  switch (type) {
    case actionTypes.INCREMRNT:
      return state + payload;

    case actionTypes.DECREMENT:
      return state - payload;

    default:
      return state;
  }
};

const stepReducer = (state = 5, action) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
