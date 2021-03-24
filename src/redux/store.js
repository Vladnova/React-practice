import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counter/counterReducer';
import todosReduser from './todos/todosReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReduser,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
