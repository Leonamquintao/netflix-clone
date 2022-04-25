import React from 'react';
import { MovieRowProps } from '../interfaces';
import './MovieRow.css';

const MovieRow: React.FC<MovieRowProps> = ({ title, rowItems }) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--listArea">
        <div className="movieRow--list">
          {rowItems.results.length > 0 &&
            rowItems.results.map((item, key) => (
              <div key={key} className="movieRow--item">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_name}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
