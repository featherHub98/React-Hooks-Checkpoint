import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return (
      <div className="no-movies">
        <h3>No movies found!</h3>
        <p>Try adjusting your filters or add a new movie.</p>
      </div>
    );
  }

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;