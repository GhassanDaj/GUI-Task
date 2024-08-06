import React from 'react';
import './App.css';
import TaskList from './Components/TaskList/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
      </header>
      <main>
        <TaskList />
      </main>
    </div>
  );
}

export default App;
