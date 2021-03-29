import React from 'react';
import { connect } from 'react-redux';
import todosActions from '../../redux/todos/todosActions';
import './TodoFilter.scss';

const TodoFilter = ({ value, onChange }) => (
  <div className="TodoFilter">
    <p className="TodoFilter__label">Фильтр по содержимому</p>
    <input
      type="text"
      className="TodoFilter__input"
      value={value}
      onChange={onChange}
    />
  </div>
);

const mapStateToProps = state => ({
  value: state.todos.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(todosActions.FilterTodos(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);
