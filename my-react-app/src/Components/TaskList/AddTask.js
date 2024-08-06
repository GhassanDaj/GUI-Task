// src/components/TaskList/AddTask.js

import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName) {
      addTask({ id: Date.now(), name: taskName, dueDate, completed: false });
      setTaskName('');
      setDueDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
