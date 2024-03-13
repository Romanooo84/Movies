import './src/sass/loader.scss';
import Notiflix from 'notiflix';

const btnload = document.querySelector('header-home-button')

const loader = document.querySelector('.loader');

document.querySelector('.loader').classList.remove('loading');

async function fetchData() {
    try {
        loader.classList.remove('hidden');
    } catch (error) {
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
    }
    }
    fetchData();