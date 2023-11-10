import 'modern-normalize';
import { createFilmsListMarkUp } from './filmListmarkUp.js';
import { fetchFilmListByName, resetPage } from './fetchFilm.js'

const filmList = document.querySelector('.film-list');
const form = document.querySelector('.searchbox');
const loadMoreBtn = document.querySelector('.load-more')

let movieName = '';
form.addEventListener('submit', onFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMoreBtnClick)


function onFormSubmit(e) {
    e.preventDefault();
    filmList.innerHTML = '';
    movieName = e.target.elements.filmToSearch.value;
    if (!movieName) {
       return alert('Please eneter film name!');
        
    }
    resetPage();
    fetchFilmListByName(movieName).then(list => {
        if (list.isLastPage) {
            loadMoreBtn.classList.remove('is-visible');
        } else {
            loadMoreBtn.classList.add('is-visible');
        }
        
        filmList.insertAdjacentHTML('beforeend', createFilmsListMarkUp(list.data))
    })

}


function onLoadMoreBtnClick(e) {
    e.preventDefault();
    fetchFilmListByName(movieName).then(list => {
        filmList.insertAdjacentHTML('beforeend', createFilmsListMarkUp(list.data))
        if (list.isLastPage) { 
            loadMoreBtn.classList.remove('is-visible');
}

    })
}
