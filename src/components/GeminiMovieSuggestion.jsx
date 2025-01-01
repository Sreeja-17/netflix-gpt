import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GeminiMovieSuggestion = () => {
  const gemini = useSelector((store => store.gemini))
  const { movieNames, movieResults } = gemini;
  if (!movieNames) return null;
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
      {movieNames.map((movieName, index) => (
        <MovieList
        key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
  ;
}

export default GeminiMovieSuggestion;