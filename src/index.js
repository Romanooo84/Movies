import './sass/main.scss';

const apiKey = 'e7c930d9ee21da94f8fc3257d387eced'; // Zastąp 'twój_klucz_api' własnym kluczem API TMDb
const movieIds = ['123', '456', '789']; // Zastąp tablicę 'movieIds' rzeczywistymi ID filmów

const fetchMovieData = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(`Movie ID ${movieId}:`, data);
  } catch (error) {
    console.error(`Error fetching movie ID ${movieId}:`, error);
  }
};

// Pobierz informacje o każdym filmie
movieIds.forEach(movieId => fetchMovieData(movieId));