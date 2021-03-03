import React, { Component } from 'react';
import Form from './components/Form';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import initialTodos from './todos.json';
import shortid from 'shortid';
import TodoEditir from './components/TodoEditir/TodoEditir';
import Filter from './components/Filter/Filter';
import Modal from './components/Modal';
// import Clock from './components/Clock/Clock';
// import Tabs from './components/Tabs';
// import tabs from './tabs.json';
import IconBtn from './components/IconBtn';
import { ReactComponent as AddIcon } from './icon/plus.svg';
import { ReactComponent as Close } from './icon/cancel.svg';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const nextTodo = this.state.todos;
    const prevTodo = prevState.todos;
    if (nextTodo !== prevTodo) {
      localStorage.setItem('todos', JSON.stringify(nextTodo));
    }
    if (nextTodo.length > prevTodo.length && prevTodo.length !== 0) {
      this.toggleModal();
    }
  }

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsetTodos = JSON.parse(todos);
    if (parsetTodos) {
      this.setState({ todos: parsetTodos });
    }
  }

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  ToggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, filter, showModal } = this.state;

    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );

    const normalizedFilter = filter.toLowerCase();

    const visibleTodos = todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
    return (
      <>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditir onSubmit={this.addTodo} />
            <IconBtn
              onClick={this.toggleModal}
              aria-label="Закрыть модальное окно"
            >
              <Close width="32" height="32" fill="red" />
            </IconBtn>
          </Modal>
        )}
        {/* <Tabs items={tabs} />
        {showModal && <Clock />}

        <button type="button" onClick={this.toggleModal}>
          Открыть
        </button> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <Form onSubmit={this.formSubmitHandler} /> */}

        <IconBtn onClick={this.toggleModal} aria-label="Добавить todo">
          <AddIcon width="40" height="40" fill="white" />
        </IconBtn>
        <TodoList
          todos={visibleTodos}
          onDeliteTodo={this.deleteTodo}
          onToggleCompleted={this.ToggleCompleted}
        />
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        {/* <Counter initialValue={10} /> <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <div>
          <p>Общее кол-во: {todos.length}</p>
          <p>Кол-во виполненых: {completedTodos} </p>
        </div>
      </>
    );
  }
}

export default App;

//
//
