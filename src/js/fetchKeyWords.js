const searchForm = document.querySelector('.header-home-form');
const moviesContainer = document.querySelector('.movie__list');
let page = 1;
let genre;

const fetchKeyMovies = async (querySearch, page) => {
  const API_KEY = 'e7c930d9ee21da94f8fc3257d387eced';

  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    query: querySearch,
    page: page,
  });

  const response = await fetch(`https://api.themoviedb.org/3/search/movie?${searchParams}`);
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

const renderKeyMovies = movies => {
  console.log('Movies', movies);

  return movies
    .map(({ poster_path, original_title, genre_ids, release_date }) => {
      return `<li class="movie-card">
        <a href="${poster_path}">
          <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${original_title}"/>
        </a>
        <div class="info">
          <p class="info-item">
            <b> ${original_title}</b>
          </p>
          <p class="info-item">
            <b> ${release_date.slice(0, 4)}</b>
          </p>
          <p class="info-item">
            <b>  ${genre_ids.slice(0, 2)}</b>
          </p>
        </div>
      </li>`;
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
      const moviesMarkup = renderKeyMovies(movies);
      moviesContainer.innerHTML = moviesMarkup;
    })

    .catch(error => console.log(error));
};
searchForm.addEventListener('submit', searchingInput);
