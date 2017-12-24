$(function() {
  var gameStatus = {
    started: false,
    processors: 0,
    coins: 0,
    methods: {guessing: true, other: false}
  }

  // start the game using enter
  $('body').keydown(function(e) {
    if (e.keyCode == 13 && !gameStatus.started) { startGame() }
  });
  // start the game by clicking
  $('#start-intructions').click(function() {
    if (!gameStatus.started) { startGame() }
  });

  // go from the intro screen to starting the game
  function startGame(){
    gameStatus.started = true;
    document.getElementById('poweron').play();
    $('.intro-screen').fadeOut('slow', () => {
      //finished the fade out, safe to remove
      $('.intro-screen').remove();

    });
  }


});
