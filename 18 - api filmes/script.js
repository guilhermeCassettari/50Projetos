const API_URL = 'http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cfabbc026f6d66ca9a4beffa3b2dffe2&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'http://api.themoviedb.org/3/search/movie?api_key=cfabbc026f6d66ca9a4beffa3b2dffe2&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchItem = search.value

    if (searchItem && searchItem !== '') {
        getMovies(SEARCH_API + searchItem)
        searchItem.value = ''
    } else {
        window.location.reload()
    }
})

async function getMovies(url) {

    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie

        const movieElement = document.createElement('div')
        movieElement.classList.add('movie')

        movieElement.innerHTML = `            
                <img src="${IMG_PATH + poster_path}" alt="${title}" />
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getClassByVote(vote_average)}">${vote_average}</span>
                </div>

                <div class="overview">
                    <h3>Overview</h3>
                   ${overview}
                </div>
                `

        main.appendChild(movieElement)
    })
}

function getClassByVote(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

getMovies(API_URL)