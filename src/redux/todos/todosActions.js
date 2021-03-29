import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const AddTodo = createAction('todos/Add', text => ({
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
}));
const DeleteTodo = createAction('todos/Delete');
const FilterTodos = createAction('todos/ToggleComplited');
const TogglerComplitedTodo = createAction('todos/ChangeFilter');

export default { AddTodo, DeleteTodo, TogglerComplitedTodo, FilterTodos };
