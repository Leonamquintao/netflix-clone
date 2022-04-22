import React from 'react';
import { MovieRowProps } from '../interfaces';
import './MovieRow.css';

const MovieRow: React.FC<MovieRowProps> = ({ title, rowItems }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
    </div>
  );
};

export default MovieRow;
