const apiKey = 'bb127790';

// Request, Timeout ID
let id;

async function searchMovies(movie) {

    try {
        let url = `https://www.omdbapi.com/?s=${movie}&apikey=${apiKey}`;

            // Fetching Data
            let res = await fetch(url);
            let data = await res.json();
            // console.log(data.Search)
            return data.Search;
    }
    catch(err) {
        console.log(err);
    }
}

// Append
function append(movies) {

    const searchBar = document.getElementById('movies');  
    
    searchBar.innerHTML = null;

    movies.map((elem) => {

        let p = document.createElement('p');

        p.innerText = elem.Title;
        searchBar.append(p);
    });
}

async function main() {

    const movie = document.getElementById("query").value;
   
    // Search Movie
    let movies = await searchMovies(movie);

    console.log(movies)
    // If api returns valid movies name
    if(movies !== undefined) {
        append(movies);
    }
}

// Debouncing by passing the 
// main fxn and delay time for sending
// the request check, it takes time = delay
// clear out previous request to api
// only send the last request after delay
// time and run main function which has
// searchMovies & Append function 

function debounceFunction(func,delay) {
    
    if(id) {
        clearTimeout(id);
    }

    id = setTimeout(function() {
        func();
    }, delay);
}