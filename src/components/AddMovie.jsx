import React, { useState } from 'react';

const AddMovie = ({ onAddMovie }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
    year: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.rating) {
      alert('Please fill in all required fields!');
      return;
    }
    
    if (formData.rating < 0 || formData.rating > 10) {
      alert('Rating must be between 0 and 10!');
      return;
    }

    const newMovie = {
      title: formData.title,
      description: formData.description,
      posterURL: formData.posterURL || `https://via.placeholder.com/300x450/6C5CE7/FFFFFF?text=${encodeURIComponent(formData.title)}`,
      rating: formData.rating,
      year: formData.year || new Date().getFullYear()
    };

    onAddMovie(newMovie);

    setFormData({
      title: '',
      description: '',
      posterURL: '',
      rating: '',
      year: ''
    });
    
    alert('Movie added successfully!');
  };

  return (
    <div className="add-movie">
      <h2>Add New Movie/TV Show</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">
            Title * <span className="required">(required)</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter movie title"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">
            Description * <span className="required">(required)</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter movie description"
            rows="3"
            required
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="rating">
              Rating (0-10) * <span className="required">(required)</span>
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              placeholder="0-10"
              min="0"
              max="10"
              step="0.1"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="year">Year</label>
            <input
              type="number"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              placeholder="Release year"
              min="1900"
              max={new Date().getFullYear()}
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="posterURL">Poster URL</label>
          <input
            type="url"
            id="posterURL"
            name="posterURL"
            value={formData.posterURL}
            onChange={handleChange}
            placeholder="https://example.com/poster.jpg"
          />
          <small>Leave empty for default placeholder</small>
        </div>
        
        <button type="submit" className="submit-btn">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;