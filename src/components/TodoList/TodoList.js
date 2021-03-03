import React from 'react';
import Todo from '../Todo';
import './TodoList.css';

const TodoList = ({ todos, onDeliteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li key={id} className="TodoList__item">
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDeliteTodo={() => onDeliteTodo(id)}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
