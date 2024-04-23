import React from 'react'
import { IMG_POSTER_URL } from '../utils/constants';

const MovieCard = ({posterPath,currentMovie}) => {
  // console.log(currentMovie);
  return (
    <>
      <img className="w-36 md:w-52 mr-3" alt="movie_name" src={IMG_POSTER_URL+posterPath} />
    </>
  )
}

export default MovieCard
