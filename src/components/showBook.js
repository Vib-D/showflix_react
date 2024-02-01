import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ show }) => {
  return (
    <div className="movie-card">
      <img src={show.image && show.image.medium} alt={show.name} />
      <div className='show-name'>
        <h3>{show.name}</h3>
      </div>
      <div className='details'>
        {show.genres && show.genres.length > 0 ? (
          <h5>{show.genres.join(' / ')}</h5>
        ) : (
          <p>No genres available</p>
        )}
      </div>
      <div className=''>
        <Link to={{
          pathname: `/show/${show.name}/${show.id}`,
          state: { show }
        }}>
          <button className='book-btn'> Watch Now </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
