const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cd1cbc4c971d9aaad2ab22e8aaa5b2b5&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=cd1cbc4c971d9aaad2ab22e8aaa5b2b5&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

const API_URL2 = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cd1cbc4c971d9aaad2ab22e8aaa5b2b5&page=2'
//Getting movies:
getMovies(API_URL)
const nextPage = document.getElementById('next')
nextPage.addEventListener('click', ()=>{
    getMovies(API_URL2)
})



async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) =>{
        const { title, poster_path, vote_average, overview, popularity, original_title, release_date} = movie
        
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
        
            <img src="${IMG_PATH + poster_path} alt="${title}">
            <div class="movie-info">
                <h3>${getRealTitle(title, original_title)} ${getYearOnly(release_date)}<br>${parseInt(popularity)} views</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${getOverview(overview)}
            </div>
        `

        main.appendChild(movieEl)
    })
}

function getClassByRate(vote){
    if(vote >= 8){
        return 'green'
    } else if(vote >=5 ){
        return 'orange'
    } else {
        return 'red'
    }
}

function getRealTitle(title, original_title){
    if(title === original_title){
        return title
    } else {
        return `${title} | ${original_title}`
    }
}

function getYearOnly(release_date){
    release_date = release_date.slice(0,4)
    return release_date 


}

function getOverview(overview){
    if (overview.length >= 400){
        return overview.slice(0, 400)+"..."
    } else {
        return overview
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const searchTerm = search.value
    
    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else{
        window.location.reload()
    }

})