type IGenres = Array<{
  id: number;
  name: string;
}>;

type IProductionCompanies = Array<{
  id: number;
  logo_path: string;
  name: string;
  origin_country?: string;
}>;

type IProductionCountries = Array<{
  iso_3166_1: string;
  name: string;
}>;

type ISpokenLanguages = Array<{
  iso_639_1: string;
  name: string;
}>;

export default interface IGetMovieResponse {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: unknown;
  budget?: number;
  genres?: IGenres;
  homepage?: string;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: IProductionCompanies;
  production_countries?: IProductionCountries;
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: ISpokenLanguages;
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}
