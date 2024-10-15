import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import teamsReducer from '../features/members/membersSlices';
import projectsReducer from '../features/projecs/projectSlice';
import taskslistReducer from '../features/tasks/tasksSlice';


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        project:projectsReducer,
        teams:teamsReducer,
        taskslist:taskslistReducer
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(apiSlice.middleware),
});

 

export default store;
