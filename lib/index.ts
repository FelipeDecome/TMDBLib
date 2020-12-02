import TMDBLib from './TMDBLib';

interface getTMDBLibInstanceParams {
  apiKey?: string;
  apiToken?: string;
}

const getTMDBLibInstance = (data: getTMDBLibInstanceParams): TMDBLib => {
  return new TMDBLib(data);
};

export default getTMDBLibInstance;
