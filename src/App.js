import React, { Component } from 'react';
import Form from './components/Form';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';
// import TodoList from './components/TodoList';
import initialTodos from './todos.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: initialTodos,   
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  formSubmitHandler = data => {
    console.log(data);
    
  }
  

  render() {
    const { todos } = this.state;

    // const completedTodos = todos.reduce(
    //   (acc, todo) => (todo.completed ? acc + 1 : acc),
    //   0,
    // );

    return (
     
      <>
        <ColorPicker/>
        <Form onSubmit={this.formSubmitHandler} />  

         {/* <Counter initialValue={10} /> */}
         {/* <Dropdown/> */}
         {/* <ColorPicker options={colorPickerOptions}/> */}

         {/* <div>
          // <p>Общее кол-во: {todos.length}</p>
          // <p>Кол-во виполненых: {completedTodos} </p>
        // </div> */}

         {/* <TodoList todos={todos} onDeliteTodo={this.deleteTodo} /> */}
      </>
    );
  }
}

export default App;
