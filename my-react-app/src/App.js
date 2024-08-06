// src/App.js

import React from 'react';
import './App.css';
import TaskList from './Components/TaskList/TaskList';

function App() {
  return (
    <div className="body">
      <div className="App">
        <header className="App-header">
          <h1>To-Do Calendar</h1>
        </header>
        <main>
          <TaskList />
        </main>
      </div>
    </div>
  );

}

export default App;
