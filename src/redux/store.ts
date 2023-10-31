import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from 'redux/reducers/projectsReducer';
import contactReducer from 'redux/reducers/contactReducer';

const store = configureStore({
  reducer: { projects: projectsReducer, contact: contactReducer },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
