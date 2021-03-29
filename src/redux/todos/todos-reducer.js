import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodo,
  changeFilter,
  toggleCompleted,
} from './todos-actions';

const items = createReducer([], {
  [addTodoSuccess]: (state, { payload }) => [...state, payload],
  [deleteTodo]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [toggleCompleted]: (state, { payload }) =>
    state.map(todo =>
      todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
    ),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addTodoRequest]: () => true,
  [addTodoSuccess]: () => false,
  [addTodoError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
