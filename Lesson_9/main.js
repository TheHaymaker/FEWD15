

// I have two buttons in my html
  // I need a way of referencing those buttons
  // if there is an ID, we can use
  // getElementById

  // grab the buttons
  // grabs all the buttons
  // 
  // document.querySelectorAll('.goBlue');

  // var blueEl = document.querySelector('.goBlue');
  // var whiteEl = document.querySelector('.goWhite');

  // when I click one of those buttons, something happens
    // event listeners


    // blueEl.addEventListener('click', function(event){
    //   document.querySelector('body').classList.add('blue');
    // });

    // whiteEl.addEventListener('click', function(event){
    //   document.querySelector('body').classList.remove('blue');
    // });

    $('.goBlue').on('click', function(){
      $('body').addClass('blue');
    });

    $('.goWhite').on('click', function(){
      $('body').removeClass('blue');
    });

    $('.toggle-para').on('click', function(){
      $('.panel p').slideToggle(500);
    })

    // hide
    // toggle
    // toggleSlide

    // on (events)

    // on while passing data to cb

    // item creation

    // item insertion

    // add + remove class


    // $('.toggle-para').on('click', function(){
    //   $('.panel p').toggle(500);
    // });

