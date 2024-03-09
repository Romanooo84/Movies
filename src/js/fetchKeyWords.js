const searchForm = document.querySelector('.header-home-form');
const gallery = document.querySelector('.gallery');
let page = 1;
let genre;

const fetchKeyMovies = async (querySearch, page) => {
  const API_KEY = 'e7c930d9ee21da94f8fc3257d387eced';

  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    query: querySearch,
    page: page,
    // per_page: perPage,
  });

  const response = await fetch(`https://api.themoviedb.org/3/search/movie?${searchParams}`);
  //   console.log(responseKeyMovies);
  const responseKeyMovies = await response.json();
  return responseKeyMovies.results;
};

// const fetchGenres = async () => {
//   const API_KEY = 'e7c930d9ee21da94f8fc3257d387eced';
//   const searchParamsGenres = new URLSearchParams({
//     api_key: API_KEY,
//   });

//   const genres = await fetch(`https://api.themoviedb.org/3/genre/movie/list?${searchParamsGenres}`);
//   const genresNames = await genres.json();
//   console.log('genresnames', genresNames);
//   return genresNames;

// };

const renderMovies = movies => {
  console.log('Movies', movies);
  genre = movies.forEach(genre => ` ${genre.name}`);
  console.log('genre', genre);
  return movies
    .map(({ poster_path, original_title, genre_ids, release_date }) => {
      return `<div class="movie__card" data-id="${id}">
          <div class="movie__imgbox">
            <img class="movie__img" src="${
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : 'https://movienewsletters.net/photos/000000h1.jpg'
            }"
            alt="${original_title}" loading="lazy"/>
          </div>
          <p class="movie__title">
            <b>${original_title}</b>
          </p>
          <div class="movie__info">
            <p class="movie__genres">
              ${genre_ids.slice(0, 2)}
            </p>
            <p class="movie__year">
              | ${release_date.slice(0, 4)}
            </p>
          </div>
        </div>`;
    })
    .join('');
};

const searchingInput = async event => {
  event.preventDefault();
  const querySearch = event.target.elements.searchQuery.value.trim();

  console.log(querySearch);
  await fetchKeyMovies(querySearch, page)
    // .then(movies => console.log(movies))
    .then(movies => {
      const moviesMarkup = renderMovies(movies);
      gallery.innerHTML = moviesMarkup;
    })

    .catch(error => console.log(error));
};
searchForm.addEventListener('submit', searchingInput);

// ******************************************************************************************* //

// // const searchForm = document.querySelector('#search-form');
// // const gallery = document.querySelector('.gallery');

// const fetchKeyMovies = async querySearch => {
//   const API_KEY = 'e7c930d9ee21da94f8fc3257d387eced';

//   const searchParams = new URLSearchParams({
//     api_key: API_KEY,
//     query: querySearch,
//     page: 1,
//     // per_page: perPage,
//   });

//   const response = await fetch(`https://api.themoviedb.org/3/search/movie?${searchParams}`);
//   // console.log(responseKeyMovies);
//   const responseKeyMovies = await response.json();
//   return responseKeyMovies;
// };

// const searchingInput = async event => {
//   event.preventDefault();
//   const querySearch = event.target.elements.searchQuery.value.trim();
//   console.log(querySearch);
//   await fetchKeyMovies(querySearch)
//     .then(responseKeyMovies => console.log(responseKeyMovies))
//     .catch(error => console.log(error));
// };
// searchForm.addEventListener('submit', searchingInput);
