// src/components/TaskList/TaskList.js

import React, { useState } from 'react';
import styles from './TaskList.module.css';
import AddTask from './AddTask';
import TaskCard from './TaskCard';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [view, setView] = useState('all');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const completeTask = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: true } : task));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const filteredTasks = tasks.filter(task => view === 'completed' ? task.completed : view === 'todo' ? !task.completed : true);

  return (
    <div className={styles.taskList}>
      <h2>Task List</h2>
      <AddTask addTask={addTask} />
      <div>
        <button onClick={() => setView('all')}>All Tasks</button>
        <button onClick={() => setView('todo')}>TODO Tasks</button>
        <button onClick={() => setView('completed')}>Completed Tasks</button>
      </div>
      {filteredTasks.map(task => (
        <TaskCard key={task.id} task={task} completeTask={completeTask} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
