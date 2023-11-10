const API_KEY = 'f4fc383e5974e2ac547a6b655d2da3b0';
const DEFAULT_PAGE = 1;
let page = DEFAULT_PAGE;
const BASE_URL = 'https://api.themoviedb.org/3/search/movie'

function resetPage() {
    page = DEFAULT_PAGE;
}

const options = {
    method:'get',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGZjMzgzZTU5NzRlMmFjNTQ3YTZiNjU1ZDJkYTNiMCIsInN1YiI6IjY1NGMxNmFhNDFhNTYxMzM2YTI0OWZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xrML7A2wgEuY19W-c15nANg6x6o7f5jv_k3EA8kmHGo',
        
    }
}

function fetchFilmListByName(movieName) {
    const searchParams = new URLSearchParams({
        query: movieName,
        include_adult: false,
        language: 'en-US',
        page,
    })
    return fetch(`${BASE_URL}?${searchParams}`, options)
        .then(res => {
        if (!res.ok) {
            throw new Error(statusText);
        }
            return res.json();
    
        }).then(data => {
          
            const filmsdata = {
                data: data.results,
                isLastPage: page === data.total_pages,
            }
            page += 1;
            return filmsdata;
    })
}

export { fetchFilmListByName, resetPage }