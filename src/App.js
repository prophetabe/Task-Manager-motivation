import React from 'react';
import FancyText from './FancyText';
import TaskGenerator from './TaskGenerator';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <FancyText title text="Task Management and Motivation App" />
      <TaskGenerator />
      <footer>
        <p>&copy; 2024 Ibraheem Aderoju. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;