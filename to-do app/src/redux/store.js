import { configureStore } from '@reduxjs/toolkit';

import taskReducer from './reducers/taskReducer';   //import task reducer


import authReducer from './reducers/authReducer'; //import auth reducer

const store = configureStore({
  reducer: {
    task: taskReducer,     //task reducer
    auth: authReducer,    //auth reducer
  },
});

export default store;

