import { fetchPopularMovies } from './fetchMovies';

let pageNumber = 1;
const videoSection = document.querySelector('.movie__list');
const renderMovies = movies => {
  // Tutaj możesz napisać kod do wyświetlenia filmów, na przykład wstawiając je do odpowiedniego miejsca w HTML.
  console.log(movies);

  movies.results.map(val => {
    const html = `<li class="movie-card">
    <a href="${val.poster_path}">
    <img src="https://image.tmdb.org/t/p/w500/${val.poster_path}" alt="${val.title}"/></a>
    <div class="info">
      <p class="info-item">
       <b> ${val.title}</b>
      </p>
      <p class="info-item">
       <b> ${val.release_date.slice(0, 4)}</b>
      </p>
    </div>
  </li>
  `;

    videoSection.insertAdjacentHTML('afterbegin', html);
  });
};

fetchPopularMovies(pageNumber)
  .then(movies => renderMovies(movies))
  .catch(err => console.error(err));
