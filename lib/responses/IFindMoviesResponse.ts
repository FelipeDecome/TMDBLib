type IFindMovieResults = Array<{
  original_language: string;
  title: string;
  id: number;
  original_title: string;
  poster_path: string;
  popularity: number;
  overview: string;
  release_date: string;
  vote_count: number;
  adult: boolean;
  backdrop_path: null;
  vote_average: number;
  genre_ids: number[];
  video: boolean;
}>;

export default interface IFindMoviesResponse {
  results: IFindMovieResults;
}
