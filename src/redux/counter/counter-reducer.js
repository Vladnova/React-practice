import { combineReducers } from 'redux';
import counterTypes from './counter-types';

const valueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case counterTypes.INCREMENT:
      return state + payload;
    case counterTypes.DECREMENT:
      return state - payload;
    default:
      return state;
  }
};

const stepReducer = (state = 5, { type, payload }) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
