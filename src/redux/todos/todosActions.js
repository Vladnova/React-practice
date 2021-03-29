import types from './todosTypes';
import shortid from 'shortid';

const AddTodo = text => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
});

const DeleteTodo = TodoId => ({
  type: types.DELETE,
  payload: TodoId,
});

const TogglerComplitedTodo = id => ({
  type: types.TOGGLE_COMPLITED,
  payload: id,
});

const FilterTodos = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { AddTodo, DeleteTodo, TogglerComplitedTodo, FilterTodos };
