const addToQueue = movieId => {
  const queue = JSON.parse(localStorage.getItem('queueMovies')) || [];
  if (!queue.includes(movieId)) {
    queue.push(movieId);
    localStorage.setItem('queueMovies', JSON.stringify(queue));
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const addToQueueBtn = document.getElementById('queue-button'); // Poprawiono identyfikator
  if (addToQueueBtn) {
    addToQueueBtn.addEventListener('click', () => {
      const movieId = addToQueueBtn.getAttribute('data-movie-id');
      addToQueue(movieId);
    });
  }
});
