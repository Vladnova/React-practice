import { createAction } from '@reduxjs/toolkit';

export const addTodoRequest = createAction('todos/addTodoRequest');
export const addTodoSuccess = createAction('todos/addTodoSuccess');
export const addTodoError = createAction('todos/addTodoError');

export const deleteTodo = createAction('todos/delete');
export const changeFilter = createAction('todos/changeFilter');
export const toggleCompleted = createAction('todos/toggleCompleted');
