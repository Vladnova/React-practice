import React, { Component } from 'react';
// import Form from './components/Form';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
// import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import initialTodos from './todos.json';
import shortid from 'shortid';
import TodoEditir from './components/TodoEditir/TodoEditir';
import Filter from './components/Filter/Filter';

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
    todos: initialTodos,
    filter: '',
  };

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

  // formSubmitHandler = data => {
  //   console.log(data);
  // };

  render() {
    const { todos, filter } = this.state;

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
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        <TodoList
          todos={visibleTodos}
          onDeliteTodo={this.deleteTodo}
          onToggleCompleted={this.ToggleCompleted}
        />

        <Filter value={filter} onChangeFilter={this.changeFilter} />
        {/* <Counter initialValue={10} /> */}
        {/* <Dropdown/> */}
        {/* <ColorPicker options={colorPickerOptions}/> */}
        <div>
          <p>Общее кол-во: {todos.length}</p>
          <p>Кол-во виполненых: {completedTodos} </p>
        </div>
        <TodoEditir onSubmit={this.addTodo} />
      </>
    );
  }
}

export default App;
