function e(e){return fetch(`https://api.themoviedb.org/3/search/movie?query=${e}&api_key=f4fc383e5974e2ac547a6b655d2da3b0`).then((e=>{if(console.log(e),!e.ok)throw console.log(e),new Error(statusText);return e.json()}))}const t=document.querySelector(".film-list");document.querySelector(".searchbox").addEventListener("submit",(function(n){n.preventDefault();const r=n.target.elements.filmToSearch.value;e(r).then((e=>{r||alert("empty"),t.insertAdjacentHTML("afterbegin",e.results.map((e=>{const{overview:t,title:n,backdrop_path:r}=e;return`\n    <li>\n  <h2>${n}</h2>\n  <img src="${r?`https://image.tmdb.org/t/p/w500/${r}`:"https://via.placeholder.com/500x281"}" alt="${n}">\n  <p>${t}</p>\n</li>`})).join(""))}))}));
//# sourceMappingURL=filmApi.26192aee.js.map
