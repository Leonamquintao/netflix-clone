/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { FeaturedMovieDetails, Genres } from '../interfaces';
import './FeaturedMovie.css';

interface FeaturedMovieProps {
  data: FeaturedMovieDetails;
}

const FeaturedMovie: React.FC<FeaturedMovieProps> = ({ data }) => {
  const {
    id,
    name,
    languages,
    original_name,
    backdrop_path,
    vote_average,
    number_of_seasons,
    overview,
    genres,
    first_air_date,
  } = data;

  const firstDate = new Date(first_air_date);

  const handleGenresTransformation = (_genres: Genres[]): string => {
    const genres_string = _genres.map((value) => value.name);
    return genres_string.join(', ');
  };

  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">
            {languages.includes('ar') ? name : original_name}
          </div>
          <div className="featured--info">
            <div className="featured--points">{vote_average} points</div>

            <div className="featured--year">{firstDate.getFullYear()}</div>
            {number_of_seasons && number_of_seasons > 0 && (
              <div className="featured--seasons">
                {number_of_seasons} season{number_of_seasons !== 1 ? 's' : ''}
              </div>
            )}
            <div className="featured--description">{overview}</div>

            <div className="featured--buttons">
              <a className="features--watchbutton" href={`/watch/${id}`}>
                ► watch
              </a>
              <a className="features--addbutton" href={`/list/add/${id}`}>
                + My List
              </a>
            </div>
            <div className="featured--genres">
              <strong>Genres:</strong> {handleGenresTransformation(genres)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
