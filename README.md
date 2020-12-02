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
    query: Harry Potter,                // Required - A text to search.
    language: en-US,                    // Optional - The language to display translated data(default en-US)
    page: number,                       // Optional - Specify the page for results(maximmun 500), each page have up to 20 items. (default 1)
    include_adult: boolean,             // Optional - Specify if the request should return adult content or not
    region: string,                     // Optional - Specify a ISO 3166-1 code to filter release dates.
    year: number,                       // Optional
    primary_release_year: number,       // Optional
  });

  // id: string;
  const harryPotterMovie = await tmdb.getMovie(id);
```
