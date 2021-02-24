import React, { Component } from 'react';
import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
// import ColorPicker from './components/ColorPicker';
// import TodoList from './components/TodoList';
// import initialTodos from './todos.json';

//

const App = () => (
  <>
    <h1>Состояние компонента</h1>

    <Counter initialValue={10} />
  </>
);

export default App;
