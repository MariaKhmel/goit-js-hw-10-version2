import axios from "axios";
import { TheCatAPI } from "@thatapicompany/thecatapi";
import { createBreedListMarkUp, onFetchError, fetchBreeds, fetchCatByBreed, createCatBreedCardMarkUp, showLoadingMsg, hideLoadingMsg } from "./cat-api";
import SlimSelect from 'slim-select';
axios.defaults.headers.common["x-api-key"] = "live_IjKp5YKoi1gmAci99Xx6grvca6ZYxkTQCdzSYIW0ls6kvqNdLBH37Q3izY";


//////////refs
// const API_KEY = 'live_IjKp5YKoi1gmAci99Xx6grvca6ZYxkTQCdzSYIW0ls6kvqNdLBH37Q3izYUOZtG5';
const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');

const theCatAPI = new TheCatAPI();



fetchBreeds().then((cats) => {
    cats.map(catBreed => {
        breedSelect.insertAdjacentHTML('beforeend', createBreedListMarkUp(catBreed))
        hideLoadingMsg(); 
    });

}
).catch(onFetchError);

breedSelect.addEventListener('change', getInfoByCatBreed)

function getInfoByCatBreed(e) {
    showLoadingMsg();
    e.preventDefault();
    const selectedCatBreed = breedSelect.options[breedSelect.selectedIndex].id;
    
    fetchCatByBreed(selectedCatBreed).then(cat => {
        catInfo.innerHTML = createCatBreedCardMarkUp(cat);
        hideLoadingMsg();
    })

}



