import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './todosActions';

const itemReducer = createReducer([], {
  [actions.AddTodo]: (state, { payload }) => [...state, payload],
  [actions.DeleteTodo]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [actions.TogglerComplitedTodo]: (state, { payload }) =>
    state.map(todo =>
      todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
    ),
});

const filterItemReducer = createReducer('', {
  [actions.FilterTodos]: (_, { payload }) => payload,
});

export default combineReducers({
  item: itemReducer,
  filter: filterItemReducer,
});
