import React from 'react';

const Filter = ({ titleFilter, ratingFilter, onTitleChange, onRatingChange }) => {
  return (
    <div className="filter">
      <h2>Filter Movies</h2>
      
      <div className="filter-group">
        <label htmlFor="title-filter">
          <span className="filter-icon">🎬</span>
          Filter by Title:
        </label>
        <input
          type="text"
          id="title-filter"
          placeholder="Type movie title..."
          value={titleFilter}
          onChange={(e) => onTitleChange(e.target.value)}
        />
      </div>
      
      <div className="filter-group">
        <label htmlFor="rating-filter">
          <span className="filter-icon">⭐</span>
          Minimum Rating: <strong>{ratingFilter.toFixed(1)}</strong>
        </label>
        <input
          type="range"
          id="rating-filter"
          min="0"
          max="10"
          step="0.5"
          value={ratingFilter}
          onChange={(e) => onRatingChange(parseFloat(e.target.value))}
        />
        <div className="rating-labels">
          <span>0</span>
          <span>5</span>
          <span>10</span>
        </div>
      </div>
      
      <div className="current-filters">
        {titleFilter && (
          <span className="filter-tag">
            Title contains: "{titleFilter}"
            <button onClick={() => onTitleChange('')}>✕</button>
          </span>
        )}
        {ratingFilter > 0 && (
          <span className="filter-tag">
            Min rating: {ratingFilter}
            <button onClick={() => onRatingChange(0)}>✕</button>
          </span>
        )}
      </div>
    </div>
  );
};

export default Filter;