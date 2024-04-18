import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState: {
        nowPlayMovies : null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
    },
    reducers : {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
    },
})
export const {addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;