// pick a random keysound to play
function playSound(){
  var sounds = ['k1', 'k2', 'k3', 'k4'];
  var randomId = sounds[Math.floor(Math.random() * 4)];
  document.getElementById(randomId).play();
}

$(function() {
  var game = {
    state: 'intro', //'instructions', 'playing'
    processors: 0,
    coins: 0,
    methods: {guessing: true, other: false}
  }

  // ~~~~~~~~~~ INTRO ~~~~~~~~~~
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

  // ~~~~~~~~~~ INSTRUCTIONS ~~~~~~~~~~
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
          $('.game').append(gameDivs);
      });
    }
  }

  // ~~~~~~~~~~ GAME ~~~~~~~~~~


});
