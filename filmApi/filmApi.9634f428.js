function e(e){return e.map((e=>{const{overview:t,title:n,backdrop_path:r}=e;return`\n    <li>\n  <h2>${n}</h2>\n  <img src="${r?`https://image.tmdb.org/t/p/w500/${r}`:"https://via.placeholder.com/500x281"}" alt="${n}">\n  <p>${t}</p>\n</li>`})).join("")}let t=1;const n={method:"get",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGZjMzgzZTU5NzRlMmFjNTQ3YTZiNjU1ZDJkYTNiMCIsInN1YiI6IjY1NGMxNmFhNDFhNTYxMzM2YTI0OWZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xrML7A2wgEuY19W-c15nANg6x6o7f5jv_k3EA8kmHGo"}};function r(e){const r=new URLSearchParams({query:e,include_adult:!1,language:"en-US",page:t});return fetch(`https://api.themoviedb.org/3/search/movie?${r}`,n).then((e=>{if(!e.ok)throw new Error(statusText);return e.json()})).then((e=>{const n={data:e.results,isLastPage:t===e.total_pages};return t+=1,n}))}const i=document.querySelector(".film-list"),a=document.querySelector(".searchbox"),s=document.querySelector(".load-more");let o="";a.addEventListener("submit",(function(n){if(n.preventDefault(),i.innerHTML="",o=n.target.elements.filmToSearch.value,!o)return alert("Please eneter film name!");t=1,r(o).then((t=>{t.isLastPage?s.classList.remove("is-visible"):s.classList.add("is-visible"),i.insertAdjacentHTML("beforeend",e(t.data))}))})),s.addEventListener("click",(function(t){t.preventDefault(),r(o).then((t=>{i.insertAdjacentHTML("beforeend",e(t.data)),t.isLastPage&&s.classList.remove("is-visible")}))}));
//# sourceMappingURL=filmApi.9634f428.js.map