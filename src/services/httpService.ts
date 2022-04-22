const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'fdfce9f96455d8a9aa8da878b612c4c4';
const LANG = 'en-US';

interface HomeListItems {
  slug: string;
  title: string;
  items: (endpoint: string) => void;
}

const fetchItems = async (endpoint: string) => {
  const request = await fetch(`${BASE_URL}${endpoint}`);
  const json = await request.json();
  return json;
};

export default {
  getHomeList: async (): Promise<HomeListItems[]> => {
    return [
      {
        slug: 'Originals',
        title: 'Originals do Netflix',
        items: await fetchItems(
          `/discover/tv?with_network=213&language=${LANG}&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'Trending',
        title: 'Recommended for you',
        items: await fetchItems(
          `/trending/all/week?language=${LANG}&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'Top Rated',
        title: 'Top Rated',
        items: await fetchItems(
          `/movie/top_rated?language=${LANG}&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'Action',
        title: 'Electrifying from start to finish',
        items: await fetchItems(
          `/discover/movie?with_genres=28&language=${LANG}&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'Comedy',
        title: 'Movies to laugh out loud',
        items: await fetchItems(
          `/discover/movie?with_genres=35&language=${LANG}&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'Romance',
        title: 'Movies to enjoy for two',
        items: await fetchItems(
          `/discover/movie?with_genres=10749&language=${LANG}&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'Horror',
        title: 'Terrifying movies',
        items: await fetchItems(
          `/discover/movie?with_genres=27&language=${LANG}&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'Documentary',
        title: 'Documentaries',
        items: await fetchItems(
          `/discover/movie?with_genres=99&language=${LANG}&api_key=${API_KEY}`,
        ),
      },
    ];
  },
};
