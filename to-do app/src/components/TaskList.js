
import React from 'react';
import '../style/styles.css';

const TaskList = ({ tasks, deleteTask }) => {
  if(tasks.length ===0){
    return null;
  }
  return (
    <ul className="tasks-list">
      {tasks.map((task, index) => (
        <li key={index} className="task-item">
          <span className="task-text">
            {task.task} ({task.priority})
          </span>
          <button className="delete-btn" onClick={() => deleteTask(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
