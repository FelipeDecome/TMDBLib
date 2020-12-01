import endpoints from './endpoinst.json';

interface ITMDBLibContructorParams {
  apiKey?: string;
  apiToken?: string;
}

interface IQueryParam {
  name: string;
  value: string;
}

interface IRequestOptions {
  path: string;
  resource: string;
  queryParams?: IQueryParam[];
}

class TMDBLib {
  private apiKey?: string;
  private apiToken?: string;

  constructor(params: ITMDBLibContructorParams) {
    Object.assign(this, params);
  }

  public async request({ path, ...rest }: IRequestOptions): Promise<void> {

  }
}
