
function renderMovies(movies) {
var movieContent = "";

    movies.forEach(element => {
        movieContent += `<div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters bg-secondary">
          <div class="col-md-4">
            <img src="${element.poster}" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.year}</p>
              <p class="card-text">IMDB:</p>
              <p class="card-text">${element.imdbRating}</p>
              <p class="card-text">Rotten Tomatoes:</p>
              <p class="card-text">${element.rottenTomatoesRating * 100}%</p>
            </div>
          </div>
        </div>
      </div>`;        
    });
    return `
        <div class="text-center mt-5">
            <div>
                ${movieContent}
            </div>
        </div>
    `
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}