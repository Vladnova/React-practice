import React, { Component } from 'react';
// import Form from './components/Form';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
// import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
// import initialTodos from './todos.json';
import shortid from 'shortid';
import TodoEditir from './components/TodoEditir/TodoEditir';
import Filter from './components/Filter/Filter';
import Modal from './components/Modal';
import Clock from './components/Clock/Clock';

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
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
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
        {showModal && <Clock />}

        <button type="button" onClick={this.toggleModal}>
          Открыть
        </button>
      </>
    );
  }
}

export default App;

// {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <h1>Модальное окно</h1>
//             <p>
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
//               nihil reprehenderit officia nemo eum iusto ex sunt rem dicta
//               architecto natus doloribus sit dolorem hic pariatur corrupti
//               aspernatur, quod ipsa.
//             </p>
//             <button type="button" onClick={this.toggleModal}>
//               Закрить
//             </button>
//           </Modal>
//         )}
//         {/* <ColorPicker options={colorPickerOptions} /> */}
//         {/* <Form onSubmit={this.formSubmitHandler} /> */}
//         <TodoList
//           todos={visibleTodos}
//           onDeliteTodo={this.deleteTodo}
//           onToggleCompleted={this.ToggleCompleted}
//         />

//         <Filter value={filter} onChangeFilter={this.changeFilter} />
//         {/* <Counter initialValue={10} /> */}
//         {/* <Dropdown/> */}
//         {/* <ColorPicker options={colorPickerOptions}/> */}
//         <div>
//           <p>Общее кол-во: {todos.length}</p>
//           <p>Кол-во виполненых: {completedTodos} </p>
//         </div>
//         <TodoEditir onSubmit={this.addTodo} />
