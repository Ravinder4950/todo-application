
const initialState = {tasks: [],};
 
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TASKS':
      return {
        ...state,
        tasks: action.payload, // Fetch tasks from some API 
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload], // Add a new task
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload), // Delete task 
      };
    default:
      return state;
  }
};

export default taskReducer;
