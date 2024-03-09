import { fetchMoviesByID, fetchPopularMovies } from './fetchMovies';

const videoSection = document.querySelector('.movie__list');
const prevPage = document.querySelector('#prev');
const nextPage = document.querySelector('#next');
const currPage = document.querySelector('#current');

let pageNumber = 1;

fetchPopularMovies(pageNumber)
  .then(movies => renderMovies(movies))
  .catch(err => console.error(err));

const renderMovies = movies => {
  console.log(movies);
  movies.results.forEach(async movie => {
    try {
      const movieDetails = await fetchMoviesByID(movie.id);
      const genres = movieDetails.genres.map(genre => genre.name).join(', ');

      const html = `<li class="movie-card">
        <a href="${movie.poster_path}">
          <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}"/>
        </a>
        <div class="info">
          <p class="info-item">
            <b> ${movie.title}</b>
          </p>
          <div class="details">
          <p class="info-item">
          <b>${genres}</b>
        </p>
          <p class="info-item">
            <b>| ${movie.release_date.slice(0, 4)}</b>
          </p>
          </div>
        </div>
      </li>`;

      videoSection.insertAdjacentHTML('afterbegin', html);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  });
};

nextPage.addEventListener('click', async () => {
  try {
    pageNumber++;
    const movies = await fetchPopularMovies(pageNumber);
    videoSection.innerHTML = '';
    renderMovies(movies);
    currPage.innerHTML = pageNumber;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
  }
});

prevPage.addEventListener('click', async () => {
  try {
    if (pageNumber > 1) {
      pageNumber--;
      const movies = await fetchPopularMovies(pageNumber);
      videoSection.innerHTML = '';
      renderMovies(movies);

      currPage.innerHTML = pageNumber;
    }
  } catch (error) {
    console.error('Error fetching popular movies:', error);
  }
});

// nextPage.addEventListener('click', async () => {
//   try {
//     pageNumber++;
//     const movies = await fetchPopularMovies(pageNumber);
//     renderMovies(movies);

//     currPage.innerHTML = `${pageNumber > 3 ? pageNumber - 3 : ''} ${
//       pageNumber > 2 ? pageNumber - 2 : ''
//     } ${pageNumber > 1 ? pageNumber - 1 : ''} ${pageNumber} ${pageNumber + 1} ${pageNumber + 2} ${
//       pageNumber + 3
//     }`;
//   } catch (error) {
//     console.error('Error fetching popular movies:', error);
//   }
// });

// fetchMoviesByID(27)
//   .then(movie => {
//     console.log(movie.genres);
//     movie.genres.map(val => console.log(val.id + ' ' + val.name));
//   })
//   .catch(err => console.error(err));

// const renderMovies = movies => {
//   // console.log(movies);
//   movies.results.map(val => {
//     console.log(val.genre_ids);
//     const genre_id = val.genre_ids;

//     const html = `<li class="movie-card">
//     <a href="${val.poster_path}">
//     <img src="https://image.tmdb.org/t/p/w500/${val.poster_path}" alt="${val.title}"/></a>
//     <div class="info">
//       <p class="info-item">
//        <b> ${val.title}</b>
//       </p>
//       <p class="info-item">
//        <b> ${val.release_date.slice(0, 4)}</b>
//       </p>
//       <p class="info-item">
//        <b> gatunki</b>
//       </p>
//     </div>
//   </li>
//   `;
//     videoSection.insertAdjacentHTML('afterbegin', html);
//   });
// };
