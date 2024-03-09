import { fetchMoviesByID, fetchPopularMovies } from './fetchMovies';

const videoSection = document.querySelector('.movie__list');

let pageNumber = 1;

fetchPopularMovies(pageNumber)
  .then(movies => renderMovies(movies))
  .catch(err => console.error(err));

const renderMovies = movies => {
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
          <p class="info-item">
            <b> ${movie.release_date.slice(0, 4)}</b>
          </p>
          <p class="info-item">
            <b>  ${genres}</b>
          </p>
        </div>
      </li>`;

      videoSection.insertAdjacentHTML('afterbegin', html);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  });
};

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
