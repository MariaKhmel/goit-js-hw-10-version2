const API_KEY = 'f4fc383e5974e2ac547a6b655d2da3b0';



function fetchFilmListByName(movieName) {
    return fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${API_KEY}`).then(res => {
        console.log(res);
        if (!res.ok) {
            console.log(res);
            throw new Error(statusText);
        }
        return res.json();
    })
}

export{fetchFilmListByName}