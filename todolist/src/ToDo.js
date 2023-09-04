import React, { useState } from 'react';

function Todo({ task, index, removeTodo, editTodo }) {
  const [isEditing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    editTodo(index, editedTask);
    setEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          {task}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => removeTodo(index)}>X</button>
        </div>
      )}
    </li>
  );
}

export default Todo;
