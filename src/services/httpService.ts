import {
  FeaturedMovieDetails,
  HomeListItems,
  MovieDetails,
} from '../interfaces';

const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;

const LANG = 'en-US';

const fetchItems = async (endpoint: string) => {
  const request = await fetch(`${REACT_APP_BASE_URL}${endpoint}`);
  const json = await request.json();
  return json;
};

export default {
  getHomeList: async (): Promise<HomeListItems[]> => {
    return [
      {
        slug: 'Originals',
        title: 'Leonflix Originals',
        items: await fetchItems(
          `/discover/tv?with_network=213&language=${LANG}&api_key=${REACT_APP_API_KEY}`,
        ),
      },
      {
        slug: 'Trending',
        title: 'Recommended for you',
        items: await fetchItems(
          `/trending/all/week?language=${LANG}&api_key=${REACT_APP_API_KEY}`,
        ),
      },
      {
        slug: 'Top Rated',
        title: 'Top Rated',
        items: await fetchItems(
          `/movie/top_rated?language=${LANG}&api_key=${REACT_APP_API_KEY}`,
        ),
      },
      {
        slug: 'Action',
        title: 'Electrifying from start to finish',
        items: await fetchItems(
          `/discover/movie?with_genres=28&language=${LANG}&api_key=${REACT_APP_API_KEY}`,
        ),
      },
      {
        slug: 'Comedy',
        title: 'Movies to laugh out loud',
        items: await fetchItems(
          `/discover/movie?with_genres=35&language=${LANG}&api_key=${REACT_APP_API_KEY}`,
        ),
      },
      {
        slug: 'Romance',
        title: 'Movies to enjoy for two',
        items: await fetchItems(
          `/discover/movie?with_genres=10749&language=${LANG}&api_key=${REACT_APP_API_KEY}`,
        ),
      },
      {
        slug: 'Horror',
        title: 'Terrifying movies',
        items: await fetchItems(
          `/discover/movie?with_genres=27&language=${LANG}&api_key=${REACT_APP_API_KEY}`,
        ),
      },
      {
        slug: 'Documentary',
        title: 'Documentaries',
        items: await fetchItems(
          `/discover/movie?with_genres=99&language=${LANG}&api_key=${REACT_APP_API_KEY}`,
        ),
      },
    ];
  },
  getMovieDetails: async ({
    movieId,
    type,
  }: MovieDetails): Promise<FeaturedMovieDetails> => {
    const content = type === 'movie' ? 'movie' : 'tv';
    const URL = `/${content}/${movieId}?language=${LANG}&api_key=${REACT_APP_API_KEY}`;
    const info = await fetchItems(URL);
    return info;
  },
};
