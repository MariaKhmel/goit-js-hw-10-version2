import 'modern-normalize';
import { createFilmsListMarkUp } from './filmListmarkUp.js';
import { fetchFilmListByName } from './fetchFilm.js'

const filmList = document.querySelector('.film-list');
const form = document.querySelector('.searchbox')

form.addEventListener('submit', onFormSubmit);


function onFormSubmit(e) {
    e.preventDefault();
    const movieName = e.target.elements.filmToSearch.value;
    fetchFilmListByName(movieName).then(list => {
        if (!movieName) {
            alert('empty')
        }
        filmList.insertAdjacentHTML('afterbegin', createFilmsListMarkUp(list.results))

    })

}



