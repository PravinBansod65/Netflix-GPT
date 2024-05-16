import React, { useEffect, useState } from "react";
import { Api_Options } from "../utils/constants";

const VideoBG = ({ movieId }) => {

   const [trailerId, setTrailerId] = useState(null);
  //  console.log(trailerId);
   
// *------------- Fetching Trailer video and updating in setTrailerId using useState ------------------------------------
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      Api_Options
    );
    const json = await data.json();
    // console.log(json);

    const filterData = json.results.filter((vdeo) => vdeo.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    setTrailerId(trailer?.key);
    // console.log(trailer);
  };

  useEffect(() => {
    !trailerId && getMovieVideo();
  }, []);

  return (
    <div className="w-screen ">
      <iframe className="w-screen aspect-video "
        
        src={"https://www.youtube.com/embed/"+trailerId+"?&autoplay=1&mute=1&controls=0&rel=0"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBG;
// export trailerId;
