import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";
import { Api_Options } from "../utils/constants";

const GptSearchBar = () => {

  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  
  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);
    const gptQuery = "Act as a movie recommond section nd give movie suggestion " + searchText.current.value+ ". Ony give me name of 5 mobird"
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    // console.log(gptResults.choices);
  };  

  return (
    <div className="pt-[45%] sm:pt-[25%]  md:pt-[10%] flex justify-center mx-auto w-[96%] md:w-auto" >
      <form
        className="w-auto  md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="m-3 p-4 md:m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className=" m-3 p-2 col-span-3 md:m-4 py-2 md:px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
