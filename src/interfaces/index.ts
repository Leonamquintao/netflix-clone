export interface ItemResult {
  id: number;
  backdrop_path: string;
  first_air_date: string;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_count: number;
}

export interface Item {
  page: number;
  results: ItemResult[];
  total_pages: number;
  total_results: number;
}

export interface HomeListItems {
  slug: string;
  title: string;
  items: Item;
}

export interface MovieRowProps {
  title: string;
  rowItems: Item;
}
export interface MovieDetails {
  movieId: number;
  type: string;
}
interface Genres {
  id: number;
  name: string;
}
interface Creators {
  credit_id: string;
  id: number;
  name: string;
  profile_path: string;
}
export interface FeaturedMovieDetails {
  adult: boolean;
  backdrop_path: string;
  created_by: Creators[];
  first_air_date: string;
  genres: Genres[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  name: string;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: string[];
  production_countries: string[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}
