
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, fetchTasks } from './redux/actions/taskActions';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const tasks = useSelector((state) => state.task.tasks);

 
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleAddTask = (task) => {
    dispatch(addTask(task)); //  update the tasks state
  };

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index)); // Delete task 
  };

  return (
    <div>
      <Header />
      {isAuthenticated ? (
        <>
          <TaskInput addTask={handleAddTask} />
          <TaskList tasks={tasks} deleteTask={handleDeleteTask} />
        </>
      ) : (
        <center><p>Please log in to access the To-Do application.</p></center>
      )}
    </div>
  );
};

export default App;

