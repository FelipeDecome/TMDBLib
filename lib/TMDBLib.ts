import { AxiosInstance } from 'axios';
import getAxiosInstance from './services/api';

import IGetMovieResponse from './responses/IGetMovieResponse';
import IFindMoviesResponse from './responses/IFindMoviesResponse';
import IFindMoviesDTO from './dtos/IFindMoviesDTO';

interface ITMDBLibContructorParams {
  apiKey?: string;
  apiToken?: string;
}

class TMDBLib {
  private Authorization?: string;

  private apiKey?: string;

  private api: AxiosInstance;

  constructor({ apiKey, apiToken }: ITMDBLibContructorParams) {
    this.apiKey = apiKey;
    this.Authorization = !apiKey && apiToken ? `Bearer ${apiToken}` : '';

    this.api = getAxiosInstance();
  }

  public async findMovie(
    queryParams: IFindMoviesDTO,
  ): Promise<IFindMoviesResponse> {
    try {
      const { data } = await this.api.get<IFindMoviesResponse>(
        '/search/movie',
        {
          params: { ...queryParams, api_key: this.apiKey },
          headers: {
            Authorization: this.Authorization,
          },
        },
      );
      return data;
    } catch (err) {
      throw new Error(err);
    }
  }

  public async getMovie(id: string): Promise<IGetMovieResponse> {
    try {
      const { data } = await this.api.get<IGetMovieResponse>(`/movie/${id}`, {
        params: { api_key: this.apiKey },
        headers: {
          Authorization: this.Authorization,
        },
      });

      return data;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default TMDBLib;
