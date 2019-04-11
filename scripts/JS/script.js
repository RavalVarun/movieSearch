
const app = {};
app.key = '2b14ef1e447db99d2e8042b8470f960b';

app.displayMovie = (movieList) => {
  movieList.forEach((movie) => {
    console.log(movie.title);
    const movieHtml = `<div>
                      <h2>${movie.original_title}</h2>
                      
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
