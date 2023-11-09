export function createFilmsListMarkUp(films) {
    return films.map(film => {
        const { overview, title, backdrop_path } = film;
        const image = backdrop_path ?
            `https://image.tmdb.org/t/p/w500/${backdrop_path}` :
            'https://via.placeholder.com/500x281';
        return `
    <li>
  <h2>${title}</h2>
  <img src="${image}" alt="${title}">
  <p>${overview}</p>
</li>`
    }).join('');
}