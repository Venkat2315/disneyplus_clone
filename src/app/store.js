import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import movieReducers from '../features/movies/moviesSlice';

export const store = configureStore({
  reducer: {
    movie:movieReducers
  },
});
