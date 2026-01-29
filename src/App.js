import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import MovieDetails from './components/MovieDetails';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      description: 'A thief who steals corporate secrets through dream-sharing technology.',
      posterURL: '/posters/inception.jpg',
      rating: 8.8,
      year: 2010,
      trailerLink: 'https://www.youtube.com/embed/YoHD9XEInc0'
    },
    {
      id: 2,
      title: 'The Dark Knight',
      description: 'Batman faces the Joker, a criminal mastermind who seeks to undermine society.',
      posterURL: '/posters/The Dark Knight.jpg',
      rating: 9.0,
      year: 2008,
      trailerLink: 'https://www.youtube.com/embed/EXeTwQWrcwY'
    },
    {
      id: 3,
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space to ensure humanity\'s survival.',
      posterURL: '/posters/Interstellar.jpg',
      rating: 8.6,
      year: 2014,
      trailerLink: 'https://www.youtube.com/embed/zSWdZVtXT7E'
    }
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, {
      ...newMovie,
      id: movies.length + 1,
      rating: parseFloat(newMovie.rating)
    }]);
  };

  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
    );
  });

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <header className="app-header">
                <h1>My Favorite Movies</h1>
                <p>Add, rate, and filter your favorite movies and TV shows</p>
              </header>

              <div className="container">
                <div className="left-panel">
                  <AddMovie onAddMovie={handleAddMovie} />
                </div>

                <div className="right-panel">
                  <Filter
                    titleFilter={titleFilter}
                    ratingFilter={ratingFilter}
                    onTitleChange={setTitleFilter}
                    onRatingChange={setRatingFilter}
                  />
                  
                  <div className="movies-count">
                    Showing {filteredMovies.length} of {movies.length} movies
                  </div>
                  
                  <MovieList movies={filteredMovies} />
                </div>
              </div>
            </>
          } />
          <Route path="/movie/:id" element={
            <MovieDetails movies={movies} />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;