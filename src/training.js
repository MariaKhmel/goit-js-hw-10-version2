import 'modern-normalize';
import { buildProfileMarkup } from './profileMarkup';

function fetchUserByname() {
    return fetch("https://api.github.com/users/zen").then(res => {
        if (!res.ok) {
            throw new Error(res.statusText)
        }
        return res.json();
    });
 
}



const form = document.querySelector('.searchbox');
const profileCard = document.querySelector('.profile-container')
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const user = e.target.elements.username.value;
    fetchUserByname('zen').then(user => {
        profileCard.innerHTML = buildProfileMarkup(user);
        
    })
   
}