# TMDBLib
The movie database library for NodeJS.

## instalation
```bash
  npm install tmdblib
```

#### You can use your <strong>api key</strong> or your <strong>api token</strong>
```js
  import getTMDBLib from 'tmdblib';

  const tmdb = getTMDBLib({
    apiKey: 'YOUR_API_KEY',
    apiToken: 'YOUR_API_TOKEN',
  })

  const movies = await tmdb.findMovies({
    query: 'Harry Potter',                 // Required string - A text to search.
    language: 'pt-BR',                     // Optional string - The language to display translated data(default en-US)
    page: 1,                               // Optional number - Specify the page for results(maximmun 500), each page have up to 20 items. (default 1)
    include_adult: false,                  // Optional boolean - Specify if the request should return adult content or not
    region: 'US',                          // Optional string - Specify a ISO 3166-1 code to filter release dates.
    year: 2001,                            // Optional number
    primary_release_year: 2001,            // Optional number
  });

  // id: string;
  const harryPotterMovie = await tmdb.getMovie(id);
```
