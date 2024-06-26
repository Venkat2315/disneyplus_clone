import { createSlice } from "@reduxjs/toolkit";

const initialState={
    movies: []
}

const moviesSlice= createSlice({
    name:"movie",
    initialState,
    reducers:{
        setMovies: (state, action)=>{
            state.movies=action.payload;
        }
    }
})


export const {setMovies}= moviesSlice.actions;

export const selectMovies= (state) => state.movie.movies;

export default moviesSlice.reducer;

