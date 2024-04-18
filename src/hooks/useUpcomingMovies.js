import { useDispatch } from "react-redux";
import { Api_Options } from "../utils/constants";
import { useEffect } from "react";
import {  addUpcomingMovies } from "../utils/moviesSlice";


const useUpcomingMovies = () => {  
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      Api_Options
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, [])

}

export default useUpcomingMovies;


