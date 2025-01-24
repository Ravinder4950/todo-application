import axios from 'axios';    //to fetch the data from api

export const fetchTasks = () => async (dispatch) => {
  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather');
    dispatch({ type: 'FETCH_TASKS', payload: response.data });
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};

export const addTask = (task) => (dispatch) => {
  dispatch({ type: 'ADD_TASK', payload: task });
};

export const deleteTask = (id) => (dispatch) => {
  dispatch({ type: 'DELETE_TASK', payload: id });
};