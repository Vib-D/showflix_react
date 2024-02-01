import React from 'react';
import axios from 'axios';
import MovieCard from './showBook';
import { useState, useEffect } from 'react';


const List = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data);
      } catch (error) {
        setError('Error fetching data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, []);

  return (
    <div className="movie-list container">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && shows.map((show) => (
        <MovieCard key={show.show.id} show={show.show} />
      ))}
    </div>
  );
};


export default List;
