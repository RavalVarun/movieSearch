const app = {};

app.displayMovie = (movieList) => {
  
}

app.getMovie = (search) => {
  $.ajax({

  }).
}

app.init = () => {
  $('form').on('submit',function(event){
    event.preventDefault();

    const searchTerm = $('#search').val();
    // $('#search').val("") remove from comments once project is complete
  })
}


//document ready, initializing the app
$(function(){
  app.init();
})