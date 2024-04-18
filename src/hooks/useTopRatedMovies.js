import { useDispatch } from "react-redux";
import { Api_Options } from "../utils/constants";
import { useEffect } from "react";
import {  addTopRatedMovies } from "../utils/moviesSlice";


const useTopRatedMovies = () => {  
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      Api_Options
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, [])

}

export default useTopRatedMovies;


