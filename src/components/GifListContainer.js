import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);
  const apiKey = '8SP6Arq5276S54XlfO4YhtO0ePFRDePy'; 

  useEffect(() => {
    fetchGifs('funny');
  }, []);

  const fetchGifs = (query) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`
    )
      .then((response) => response.json())
      .then((data) => {
        setGifs(data.data.slice(0, 3)); 
      });
  };

  const handleSearchSubmit = (query) => {
    fetchGifs(query);
  };

  return (
    <div>
      <GifSearch onSubmit={handleSearchSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
};

export default GifListContainer;