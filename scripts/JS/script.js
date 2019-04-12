
const app = {};
app.key = '2b14ef1e447db99d2e8042b8470f960b';

app.displayMovie = (movieList) => {
  // console.log(movieList)
  $('section').empty();
  movieList.forEach((movie) => {
    console.log(movie.title);
    const movieHtml = `<div>
                      <h2> ${movie.title}</h2>
                      <p>Release Date : ${movie.release_date}<p>
                      <p>Language : ${movie.original_language}
                      <p>Overview : ${movie.overview}</p>
                      </br>
                      <img src=https://image.tmdb.org/t/p/w185/${movie.poster_path} alt="">
                      </br>
                      <div class="progress progress-striped active">
                      <div class=progress-bar style="width: ${movie.popularity*2}%">popularity</div>
                      </div>`;
    $('section').append(movieHtml);
  })
}

app.getMovie = (search) => {
  console.log(`${app.key}`)
  $.ajax({
    url:'https://api.themoviedb.org/3/search/movie',
    method: 'GET',
    dataType: 'json',
    data: {
      api_key: `${app.key}`,
      query: search
    }
  }).then((response)=>{
    console.log(response.results);
    //  [{movie}, {movie2}]

    const movieList = response.results;
    // let movie = response.results.original_title;
    // console.log(movie);
    app.displayMovie(movieList);
  })
}

app.init = () => {
  $('form').on('submit',function(event){
    event.preventDefault();
    const searchTerm = $('#search').val()
    $('#search').val("");
    // $('#search').val("") remove from comments once project is complete
    console.log(searchTerm);
    app.getMovie(searchTerm);
  })
}


//document ready, initializing the app
$(function(){
  app.init();
})
