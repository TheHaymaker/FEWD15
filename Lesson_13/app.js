// Grab the hamburger menu

var ham = document.querySelector('.hamburger');

// grab mobile menu
var menu = document.querySelector('.nav_mobile');

ham.addEventListener('click', function(e){
  
  if(menu.classList.contains('active')) {
    // if the mobile menu has the 'active' class
    // remove it
    menu.classList.remove('active');

  } else {
    // else, add the active class
    // this is a vanilla JS implementation of
    // jQuery's .toggleClass();
    menu.classList.add('active');
  }
});


// if the mobile menu is left active
// and the screen is made larger, then smaller,
// let's remove the mobile menu's active class
// to ensure a fresh start
window.onresize = function(){
  if(window.innerWidth > 500) {
    menu.classList.remove('active');
  }
};