var planets = [
  'earth',
  'mars',
  'jupiter',
  'saturn'
];


// wait until the document is loaded
// before running the script
$(document).ready(function(){

  for (var i = 0; i < planets.length; i++) {
    // planets[i]

    // create an html element - option
    var attributes = {
      value: planets[i],
      text: planets[i]
    };
    var option = $('<option>', attributes);
    // console.log(option);

    // insert that element into the DOM
    // in a specific spot
    $('#planet-name').append(option);
  }



  $('#planet-name').on('change', function(){
    var planet = $('#planet-name').val();
    planet = planet.toLowerCase().trim();
    // console.log(planet);

    if(planet === 'mars') {

      $('body').css('background-image', 'url(./mars.jpg)');

    } else if(planet === 'jupiter') {

      $('body').css('background-image', 'url(./jupiter.jpg)');

    } else if(planet === 'saturn') {

      $('body').css('background-image', 'url(./saturn.jpg)');

    } else {

      $('body').css('background-image', 'url(./404.jpg)');
      
    }
  });

  $('#planet-name').trigger('change');

 // based on the value

 // if the value is equal to mars
    // change the background to the mars image

});