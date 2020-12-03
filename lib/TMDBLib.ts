import { AxiosInstance } from 'axios';
import getAxiosInstance from './services/api';

import IGetMovieResponse from './responses/IGetMovieResponse';
import IFindMoviesResponse from './responses/IFindMoviesResponse';
import IFindMoviesDTO from './dtos/IFindMoviesDTO';
import TMDBLibError from './errors/TMDBLibError';

interface ITMDBLibContructorParams {
  apiKey?: string;
  apiToken?: string;
}

class TMDBLib {
  private Authorization?: string;

  private apiKey?: string;

  private api: AxiosInstance;

  constructor({ apiKey, apiToken }: ITMDBLibContructorParams) {
    if (!apiKey && !apiToken)
      throw new TMDBLibError('Api key or api token must be informed.');

    this.apiKey = apiKey;
    this.Authorization = !apiKey && apiToken ? `Bearer ${apiToken}` : '';

    this.api = getAxiosInstance();
  }

  public async findMovie(
    queryParams: IFindMoviesDTO,
  ): Promise<IFindMoviesResponse> {
    const {
      data,
      status,
      statusText,
    } = await this.api.get<IFindMoviesResponse>('/search/movie', {
      params: { ...queryParams, api_key: this.apiKey },
      headers: {
        Authorization: this.Authorization,
      },
    });

    if (status !== 200) throw new TMDBLibError(statusText, 'TMDB', status);

    return data;
  }

  public async getMovie(id: string): Promise<IGetMovieResponse> {
    const { data, status, statusText } = await this.api.get<IGetMovieResponse>(
      `/movie/${id}`,
      {
        params: { api_key: this.apiKey },
        headers: {
          Authorization: this.Authorization,
        },
      },
    );

    if (status !== 200) throw new TMDBLibError(statusText, 'TMDB', status);

    return data;
  }
}

export default TMDBLib;
