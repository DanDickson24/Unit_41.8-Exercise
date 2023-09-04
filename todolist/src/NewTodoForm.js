import React, { useState } from 'react';

function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={handleChange}
      />
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodoForm;
