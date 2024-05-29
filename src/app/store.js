import { configureStore } from '@reduxjs/toolkit';
import movieReducers from '../features/movies/moviesSlice';
import useReducer  from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    movie:movieReducers,
    user:useReducer
  },
});
