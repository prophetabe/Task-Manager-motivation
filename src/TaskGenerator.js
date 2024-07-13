import React, { useState } from 'react';
import tasks from './tasks';
import FancyText from './FancyText';
import './TaskGenerator.css';

const motivationalMessages = [
  "Great work, keep it up!",
  "Believe it!",
  "Keep the cycle going!",
];

const TaskGenerator = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const nextTask = () => {
    setCurrentTaskIndex((prevIndex) => (prevIndex + 1) % tasks.length);
  };

  const markAsCompleted = () => {
    tasks[currentTaskIndex].isCompleted = true;
    nextTask();
  };

  const currentTask = tasks[currentTaskIndex];
  const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];

  return (
    <div className="task-generator">
      <FancyText title text="Your Current Task" />
      <div className="task-details">
        <p>{currentTask.name}</p>
        <p>Status: {currentTask.isCompleted ? "Completed ✔" : "Pending"}</p>
      </div>
      <button onClick={markAsCompleted}>Mark as Completed</button>
      <button onClick={nextTask}>Next Task</button>
      <FancyText text={randomMessage} />
    </div>
  );
};

export default TaskGenerator;