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
