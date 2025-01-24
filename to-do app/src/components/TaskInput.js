
import React, { useState } from 'react';
import '../style/styles.css';

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask({ task, priority });
      setTask('');
    }else{
      alert("Task cannot be empty!")
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        className="task-input-field"
        placeholder="Add a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select
        className="task-priority-select"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit" className="task-add-btn">
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;