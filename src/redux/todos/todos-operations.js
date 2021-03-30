import axios from 'axios';
import {
  fetchTodoRequest,
  fetchTodoSuccess,
  fetchTodoError,
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  toggleTodoRequest,
  toggleTodoSuccess,
  toggleTodoError,
} from './todos-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchTodos = () => dispatch => {
  dispatch(fetchTodoRequest());
  axios
    .get('/todos')
    .then(({ data }) => dispatch(fetchTodoSuccess(data)))
    .catch(error => dispatch(fetchTodoError(error)));
};

const addTodo = text => dispatch => {
  const todo = { text, completed: false };

  dispatch(addTodoRequest());
  axios
    .post('/todos', todo)
    .then(({ data }) => dispatch(addTodoSuccess(data)))
    .catch(error => dispatch(addTodoError(error)));
};

const deleteTodo = todoId => dispatch => {
  dispatch(deleteTodoRequest());
  axios
    .delete(`/todos/${todoId}`)
    .then(() => dispatch(deleteTodoSuccess(todoId)))
    .catch(error => dispatch(deleteTodoError(error)));
};

const toggleCompleted = ({ id, completed }) => dispatch => {
  const update = { completed };
  dispatch(toggleTodoRequest());
  axios
    .patch(`/todos/${id}`, update)
    .then(({ data }) => dispatch(toggleTodoSuccess(data)))
    .catch(error => dispatch(toggleTodoError(error)));
};

export default { fetchTodos, addTodo, deleteTodo, toggleCompleted };
