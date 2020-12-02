import TMDBLib from './lib/TMDBLib';

interface getTMDBLibInstanceParams {
  apiKey?: string;
  apiToken?: string;
}

const getTMDBLibInstance = (data: getTMDBLibInstanceParams): TMDBLib => {
  return new TMDBLib(data);
};

export default getTMDBLibInstance;
