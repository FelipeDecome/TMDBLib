class TMDBLibError {
  public readonly message: string;

  public readonly service: string;

  public readonly statusCode: number;

  constructor(message: string, service = 'tmdblib', statusCode = 400) {
    this.message = message;
    this.service = service;
    this.statusCode = statusCode;
  }
}

export default TMDBLibError;
