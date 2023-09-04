import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './ToDo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  // add a new todo
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // remove a specific todo by index
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // edit a specific todo by index and update the task
  const editTodo = (index, editedTask) => {
    const newTodos = [...todos];
    newTodos[index] = editedTask;
    setTodos(newTodos);
  };

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            task={todo}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
