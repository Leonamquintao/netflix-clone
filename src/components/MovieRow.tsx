import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Item } from '../interfaces';
import './MovieRow.css';

interface MovieRowProps {
  title: string;
  rowItems: Item;
}

const MovieRow: React.FC<MovieRowProps> = ({ title, rowItems }) => {
  const PADDING_GIVEN = 60;
  const ITEM_SIZE = 150;
  const INITIAL_POSITION = -400;

  const [scrollX, setScrollX] = useState<number>(INITIAL_POSITION);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    return setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    const listWidth = rowItems.results.length * ITEM_SIZE;

    if (window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth - PADDING_GIVEN;
    }
    return setScrollX(x);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div
        aria-hidden
        className="movieRow--left"
        onClick={handleLeftArrow}
        onKeyDown={handleLeftArrow}
      >
        <ArrowBackIosIcon style={{ fontSize: 50 }} />
      </div>

      <div
        aria-hidden
        className="movieRow--right"
        onClick={handleRightArrow}
        onKeyUp={handleRightArrow}
      >
        <ArrowForwardIosIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--listArea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollX,
            width: rowItems.results.length * 150,
          }}
        >
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
