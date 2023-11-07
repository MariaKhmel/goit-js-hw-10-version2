import { Notify } from 'notiflix/build/notiflix-notify-aio';

const BASE_URL = 'https://api.thecatapi.com/v1/';
const BREEDS_ENDPOINT = 'breeds';
const BREEDBYID_ENDPOINT = 'images';
const loadingMsg = document.querySelector('.loader');
const errorMsg = document.querySelector('.error');
const breedSelect = document.querySelector('.breed-select');

const fetchBreeds = () => {
    return fetch(`${BASE_URL}${BREEDS_ENDPOINT}`).then(response => {

        if (!response.ok) {
            throw new Error(response.statusText)
        }
        
        return response.json()
    });
}



function createBreedListMarkUp({ reference_image_id, name }) {
    return  `<option class="breed-option" value='${name}' id="${reference_image_id}">${name}</option>`;
    
}


const fetchCatByBreed = breedId => {
    return fetch(`${BASE_URL}${BREEDBYID_ENDPOINT}/${breedId}`).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json()
    })
}



function createCatBreedCardMarkUp(cat) {
    const { breeds, url } = cat;
    const { name, description, temperament } = breeds[0];

    return catCard = `<li class="cat-item">
  <img src="${url}" alt="${name}">
  <div class="cat-descr">
  <h2 class="cat-title">${name}</h2>
  <p>${description}</p>
<p> <span class="temperament-title"> Temperament:&nbsp</span>${temperament}</p>
</div>
</li>`;

}

function showLoadingMsg() {
    loadingMsg.hidden = false;
}

function hideLoadingMsg() {
    loadingMsg.hidden = true;
}

function onFetchError() {
    Notify.failure('Ooops! Try reloading the page!');
    errorMsg.hidden = false;
    breedSelect.hidden = true;
    hideLoadingMsg();
}

export { fetchBreeds, onFetchError, createBreedListMarkUp, fetchCatByBreed, createCatBreedCardMarkUp, showLoadingMsg, hideLoadingMsg  };

