
const apiKey = "d19852b88e91e9642a61c9864acc4750";
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=1`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&query=`
const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")

// get Initial movies

getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = ""
    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;
        const movieEl = document.createElement("div")
        movieEl.classList.add("movie")
        console.log(IMG_PATH+poster_path)
        movieEl.innerHTML = `
        <img src = "${IMG_PATH+poster_path}" alt = "${title}"> 
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span > 
         </div> 
         <div class = "overview"> 
            <h3> OverView </h3>
            ${overview}
        </div >`
        main.appendChild(movieEl)
        console.log("loader")
    });
    
}
function getClassByRate(vote) {
    if (vote >= 8) {
        return "green"
    } else if (vote >= 5) {
        return "orange"
    }
    else {
        return "red"
    }

    
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if (searchTerm && searchTerm !== "") {
        getMovies(SEARCH+searchTerm);
        // search.value =""
    } else {
        window.location.reload();
    }

})