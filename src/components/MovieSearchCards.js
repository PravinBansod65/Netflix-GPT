import React from "react";

export const MovieSearchCards = ({
  movie: { imdbID, Year, Poster, Title, Type },
}) => {
  return (
    <div className="movie" key={imdbID}>
      <div className="text-white z-10 shadow-pink-50 font-medium">
        <p className="year">{Year}</p>
      </div>
      <div>
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
        />
      </div>
      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};
