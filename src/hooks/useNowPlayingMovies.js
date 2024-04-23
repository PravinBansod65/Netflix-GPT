import { useDispatch, useSelector } from "react-redux";
import { Api_Options } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";


const useNowPlayingMovies = () => {  
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(store=> store.movies.nowPlayMovies)
  
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      Api_Options
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, [])

}

export default useNowPlayingMovies;


