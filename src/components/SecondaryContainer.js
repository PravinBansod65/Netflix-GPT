import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies?.topRatedMovies);
  return (
    movies.nowPlayMovies && (
      <div className="MovieList bg-black pl-6 ">
        <div className="-mt-72 z-50 relative ">
        {<MovieList title={"Popular on NetflixGPT"} movies={movies?.nowPlayMovies} />}
        {<MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />}
        {<MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />}
        {<MovieList title={"Trending"} movies={movies?.popularMovies } />}
        {/* {<MovieList title={"Horror"} movies={movies?.nowPlayMovies} />} */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
