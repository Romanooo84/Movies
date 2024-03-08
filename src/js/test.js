/*-----------------------------------------------------------------------------Dodawanie Fil,uów do obejrzanych*/
const addToWatched = movieId => {
  const watched = JSON.parse(localStorage.getItem('watchedMovies')) || [];
  if (!watched.includes(movieId)) {
    watched.push(movieId);
    localStorage.setItem('watchedMovies', JSON.stringify(watched));
  }
};

/* ------------------------------------------------------------------------------ Dodawanie filmów do kolejki*/
const addToQueue = movieId => {
  const queue = JSON.parse(localStorage.getItem('queueMovies')) || [];
  if (!queue.includes(movieId)) {
    queue.push(movieId);
    localStorage.setItem('queueMovies', JSON.stringify(queue));
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const addToWatchedBtn = document.getElementById('add-to-watched');
  if (addToWatchedBtn) {
    addToWatchedBtn.addEventListener('click', () => {
      const movieId = addToWatchedBtn.getAttribute('data-movie-id');
      addToWatched(movieId);
    });
  }

  const addToQueueBtn = document.getElementById('add-to-queue');
  if (addToQueueBtn) {
    addToQueueBtn.addEventListener('click', () => {
      const movieId = addToQueueBtn.getAttribute('data-movie-id');
      addToQueue(movieId);
    });
  }
});
