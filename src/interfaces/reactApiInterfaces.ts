export interface ILocation {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: null | ILocation;
}

export interface ISingleFilm {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name?: string;
  original_title?: string;
  genres?: { id: string, name: string }[] | undefined;
  overview: string;
  popularity: number;
  poster_path: string | null;
  vote_average: number;
  vote_count: number;
}