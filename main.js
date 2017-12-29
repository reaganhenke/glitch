$(function() {
  var game = {
    state: 'intro', //'instructions', 'playing'
    processors: 0,
    coins: 0,
    methods: {guessing: true, other: false}
  }

  // start the game using enter
  $('body').keydown(function(e) {
    if (e.keyCode == 13){
      console.log('enter was clicked. state is: ', game.state);
      if (game.state == 'intro') { startInstructions() }
      else if (game.state == 'instructions' && $('#start-game').length) {
        startGame()
      };
    }
  });
  //start the game by clicking
  $('#start-intructions').click(function() {
    if (game.state == 'intro') { startInstructions() }
  });

  // go from the intro screen to instruction screen
  function startInstructions(){
    console.log('starting instructions, state: ', game.state);
    if (game.state == 'intro'){
      game.state = 'instructions';
      console.log('state changed: ', game.state);
      document.getElementById('poweron').play();
      $('.intro-screen').fadeOut('slow', () => {
        //finished the fade out, safe to remove
        $('.intro-screen').remove();
          displayInstructions();
      });
    }
  }

  $('#start-game').click(function() {
    console.log('start game clicked');
    startGame();
  });

  function startGame(){
    console.log('starting game');
    if (game.state == 'instructions'){
      game.state = 'playing';
      console.log('state changed: ', game.state);
      document.getElementById('poweron').play();
      $('.instruction-screen').fadeOut('slow', () => {
        //finished the fade out, safe to remove
        $('.instruction-screen').remove();
          // append the game screen
          console.log('time to append the game');
      });
    }
  }


});
