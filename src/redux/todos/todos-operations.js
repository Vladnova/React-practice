import axios from 'axios';
import { addTodoRequest, addTodoSuccess, addTodoError } from './todos-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const addTodo = text => dispatch => {
  const todo = { text, completed: false };

  dispatch(addTodoRequest());
  axios
    .post('/todos', todo)
    .then(({ data }) => dispatch(addTodoSuccess(data)))
    .catch(error => dispatch(addTodoError(error)));
};

export default { addTodo };
