import React, { Component } from 'react';
import Container from '../components/Container';
import TodoList from '../components/TodoList';
import TodoEditor from '../components/TodoEditor';
import Filter from '../components/TodoFilter';
import Stats from '../components/Stats';
import Modal from '../components/Modal';
import IconButton from '../components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';
// import todosApi from '../services/todos-api';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

class TodosView extends Component {
  state = {
    showModal: false,
  };

  // toggleCompleted = todoId => {
  //   const todo = this.state.todos.find(({ id }) => id === todoId);
  //   const { completed } = todo;
  //   const update = { completed: !completed };

  //   todosApi.updateTodo(todoId, update).then(updatedTodo => {
  //     this.setState(({ todos }) => ({
  //       todos: todos.map(todo =>
  //         todo.id === updatedTodo.id ? updatedTodo : todo,
  //       ),
  //     }));
  //   });
  // };

  // calculateCompletedTodos = () => {
  //   const { todos } = this.state;

  //   return todos.reduce(
  //     (total, todo) => (todo.completed ? total + 1 : total),
  //     0,
  //   );
  // };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <Container>
        <div style={barStyles}>
          <Filter />
          {/* <Stats total={totalTodoCount} completed={completedTodoCount} /> */}
          <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
            <AddIcon width="40" height="40" fill="#fff" />
          </IconButton>
        </div>

        <TodoList />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor />
          </Modal>
        )}
      </Container>
    );
  }
}

export default TodosView;
