import React from 'react';
import { FeaturedMovieItem } from '../interfaces';
import './FeaturedMovie.css';

interface FeaturedMovieProps {
  data: FeaturedMovieItem;
}

const FeaturedMovie: React.FC<FeaturedMovieProps> = ({ data }) => {
  const { name } = data;
  return (
    <div>
      <h2>Featured Movie = {name}</h2>
    </div>
  );
};

export default FeaturedMovie;
