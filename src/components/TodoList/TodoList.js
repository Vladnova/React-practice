import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Todo from '../Todo';
import todosActions from '../../redux/todos/todosActions';
import './TodoList.scss';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('TodoList__item', {
          'TodoList__item--completed': completed,
        })}
      >
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDelete={() => onDeleteTodo(id)}
        />
      </li>
    ))}
  </ul>
);

const getVisibleTodos = (todos, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return todos.filter(({ text }) =>
    text.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ todos }) => ({
  todos: getVisibleTodos(todos.item, todos.filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(todosActions.DeleteTodo(id)),
  onToggleCompleted: id => dispatch(todosActions.TogglerComplitedTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
