import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const movies = useSelector((store) => store.movies?.nowPlayMovies);

  return (
    <div className="bg-gray-900">
      <Header />
      {/* //! logic if else wala for GPT search and maincontainer movies */}
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          {!movies ? (
            <>
              <h1 className="pt-[40%] pb-[20%] font-bold text-lg text-center bg-slate-700 shadow-md text-green-200">
                <span className="text-red-500">! </span> Please Use Any <span className="text-yellow-300">VPN</span> for
                full access of this website... ❤ Thank You ❤
              </h1>
              <div className="mt-[-200px]">
                <GptSearch />
              </div>
            </>
          ) : (
            <>
              <MainContainer />
              <SecondaryContainer />
              <h1 className="pt-[40%] pb-[20%] font-bold text-lg text-center bg-neutral-800 shadow-md text-green-200">
                ❤ Everything is Good 😚
              </h1>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Browse;
