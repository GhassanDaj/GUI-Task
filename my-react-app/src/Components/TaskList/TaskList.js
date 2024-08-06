// src/components/TaskList/TaskList.js

import React from 'react';
import styles from './TaskList.module.css';
import AddTask from './AddTask';
import TaskCard from './TaskCard';

const TaskList = () => {
  return (
    <div className={styles.taskList}>
      <h2>Task List</h2>
      <AddTask />
      <TaskCard />
    </div>
  );
};

export default TaskList;
