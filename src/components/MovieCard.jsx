import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating, year, id } = movie;

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
    <Link to={`/movie/${id}`} className="movie-card-link">
      <div className="movie-card">
        <div className="movie-poster">
          <img src={posterURL} alt={title} />
          <div className="movie-rating">
            <span className="rating-number">{rating.toFixed(1)}</span>
            <div className="stars">{renderStars(rating)}</div>
          </div>
        </div>
        
        <div className="movie-info">
          <div className="movie-header">
            <h2>{title}</h2>
            <span className="movie-year">({year})</span>
          </div>
          
          <p className="movie-description">{description}</p>
          
          <div className="movie-meta">
            <span className="movie-rating-badge">
              <span className="rating-icon">⭐</span>
              {rating.toFixed(1)}/10
            </span>
            <span className="view-details">View Details →</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;