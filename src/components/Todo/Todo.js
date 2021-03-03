import React from 'react';
import IconBtn from '../IconBtn';
import { ReactComponent as Delete } from '../../icon/trash-bin.svg';

const Todo = ({ text, completed, onToggleCompleted, onDeliteTodo }) => (
  <>
    <input
      type="checkbox"
      className="TodoList__checkbox"
      checked={completed}
      onChange={onToggleCompleted}
    />
    <p className="TodoList__text">{text}</p>
    <IconBtn
      className="TodoList__btn"
      onClick={onDeliteTodo}
      aria-label="Удалить todo"
    >
      <Delete width="40" height="40" fill="white" />
    </IconBtn>
    {/* <button className="TodoList__btn" type="button" onClick={onDeliteTodo}>
      Удалить
    </button> */}
  </>
);

export default Todo;
