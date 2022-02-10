import React, { useState } from 'react';
import { Stack } from '@fluentui/react';
import './App.css';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

import data from './data.json';

export const App: React.FunctionComponent = () => {
  const [ getTodos, setTodos ] = useState(data);

  const addTodo = (todoName: string) => {
    if (todoName !== "") {
      const newId = getTodos.length + 1;
      const newTodos = [...getTodos, {id: newId, name: todoName}];
      setTodos(newTodos);
    }
  };

  const deleteTodo = (id: number) => {
    const newTasks = getTodos.filter((todo) => { return todo.id !== id });
    setTodos(newTasks);
  }

  const editTodo = (id: number, todoName: string) => {
    const editedTasks = getTodos.map(todo => {
      return todo.id === id ? {...todo, name: todoName} : {...todo}
    });
    setTodos(editedTasks);
  }

  return (
    <div className='wrapper'>
      <Stack horizontalAlign='center'>
        <h1>Todo App Using Fluent UI & React</h1>
        <Stack style={{ width: 300 }} gap={25}>
          <AddTodo addTodo={addTodo}/>
          <TodoList todos={getTodos} deleteTodo={deleteTodo} editTodo={editTodo}/>
        </Stack>
      </Stack>
    </div>
  );
};

export default App;