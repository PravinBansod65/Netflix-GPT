import React, { useEffect, useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import "./movieSearch.css";
import { MovieSearchCards } from "./MovieSearchCards";

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=d4f09760";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
// ----------------------------------------------------------------
  const [movies, setMovies] = useState([]);
  const [serachTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("spider");
  }, []);

  return (
    <>
      {/* //? form start search bar  */}
      
      <div className="pt-[45%] sm:pt-[25%]  md:pt-[10%] flex flex-col  justify-center items-center mx-auto w-[96%] md:w-auto">
        <form
          className="w-auto  md:w-1/2 bg-black grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            className="m-3 p-4 md:m-4 col-span-9"
            placeholder={lang[langKey].gptSearchPlaceholder}
            value={serachTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className=" m-3 p-2 col-span-3 md:m-4 py-2 md:px-4 bg-red-700 text-white rounded-lg"
            onClick={() => searchMovies(serachTerm)}
          >
            {lang[langKey].search}
          </button>
        </form>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie,index) => (
              <MovieSearchCards key={index}  movie={movie} />
            ))}
             {/* console.log(movie) */}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}
      </div>
      {/* //! X form end search bar  */}----------------------------------------

      {/* // ? form Search results  */}----------------------------------------
      

      {/* // ! form Search results End  */}
      
    </>
  );
};

export default GptSearchBar;
