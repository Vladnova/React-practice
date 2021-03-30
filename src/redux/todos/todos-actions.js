import { createAction } from '@reduxjs/toolkit';

export const fetchTodoRequest = createAction('todos/fetchTodoRequest');
export const fetchTodoSuccess = createAction('todos/fetchTodoSuccess');
export const fetchTodoError = createAction('todos/fetchTodoError');

export const addTodoRequest = createAction('todos/addTodoRequest');
export const addTodoSuccess = createAction('todos/addTodoSuccess');
export const addTodoError = createAction('todos/addTodoError');

export const deleteTodoRequest = createAction('todos/deleteTodoRequest');
export const deleteTodoSuccess = createAction('todos/deleteTodoSuccess');
export const deleteTodoError = createAction('todos/deleteTodoError');

export const toggleTodoRequest = createAction('todos/toggleTodoRequest');
export const toggleTodoSuccess = createAction('todos/toggleTodoSuccess');
export const toggleTodoError = createAction('todos/toggleTodoError');

export const changeFilter = createAction('todos/changeFilter');
// export const toggleCompleted = createAction('todos/toggleCompleted');
