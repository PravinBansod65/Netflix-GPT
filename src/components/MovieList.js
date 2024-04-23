import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    // console.log(movies[0].poster_path)
    // console.log(movies[0].id)
  return (
    <div className=' p-4  '>
        <h1 className="text-lg md:text-3xl font-bold py-3 text-white ">{title}</h1>
        <div className=" flex overflow-x-scroll hideScrollbar">
          {  movies?.map((movie) => <MovieCard key={movie?.id} posterPath={movie?.poster_path} currentMovie={movie} />)}
        </div>
    </div>
  )
}

export default MovieList