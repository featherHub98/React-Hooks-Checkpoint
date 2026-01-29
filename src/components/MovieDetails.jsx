import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const movie = movies.find(movie => movie.id === parseInt(id));
  
  if (!movie) {
    return (
      <div className="movie-details">
        <div className="back-button">
          <button onClick={() => navigate('/')}>Back to Home</button>
        </div>
        <div className="movie-not-found">
          <h2>Movie not found</h2>
          <p>The movie you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 10; i++) {
      stars.push(
        <span 
          key={i} 
          className={i <= rating ? 'filled' : ''}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="movie-details">
      <div className="back-button">
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
      
      <div className="details-container">
        <div className="details-header">
          <div className="details-poster">
            <img src={movie.posterURL} alt={movie.title} />
          </div>
          
          <div className="details-info">
            <h1>{movie.title} ({movie.year})</h1>
            
            <div className="details-rating">
              <div className="rating-badge">
                <span className="rating-score">{movie.rating.toFixed(1)}</span>
                <span className="rating-max">/10</span>
              </div>
              <div className="stars-large">{renderStars(movie.rating)}</div>
            </div>
            
            <div className="details-actions">
              <button className="watch-trailer-btn" onClick={() => {
                if (movie.trailerLink) {
                  window.open(movie.trailerLink, '_blank');
                }
              }}>
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
        
        <div className="details-content">
          <div className="details-description">
            <h2>Description</h2>
            <p>{movie.description}</p>
          </div>
          
          <div className="details-trailer">
            <h2>Trailer</h2>
            {movie.trailerLink ? (
              <div className="trailer-embed">
                <iframe
                  width="100%"
                  height="500"
                  src={movie.trailerLink}
                  title={`${movie.title} Trailer`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <p>No trailer available for this movie.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;