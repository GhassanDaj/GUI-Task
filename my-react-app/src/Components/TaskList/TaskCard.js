import React from 'react';

const TaskCard = ({ task, completeTask, deleteTask }) => {
  return (
    <div>
      <h3>{task.name}</h3>
      <p>Due Date: {task.dueDate}</p>
      <p>Status: {task.completed ? 'Completed' : 'TODO'}</p>
      {!task.completed && <button onClick={() => completeTask(task.id)}>Complete Task</button>}
      <button onClick={() => deleteTask(task.id)}>Delete Task</button>
    </div>
  );
};

export default TaskCard;
