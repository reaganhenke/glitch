var typing = false;
var name = '';
var lines = instructionText.lines;
var currentLineIndex = 0;

// handle enter and delete when entering a name
$('body').keyup(function(e){
  e.preventDefault();
  if (typing && e.which == 8) {
    // delete last letter
    var cur = $('.active').html();
    // don't delete the first symbol
    if (cur != '&gt; '){
      $('.active').html(cur.slice(0, -1));
    }
  } else if (typing && e.which == 13) {
    //enter
    typing = false;
    name = $('.active').html();
    name = name.substring(5);
    var lastLine = lines[lines.length-1];
    var changed = lastLine.replace('*', name);
    lines[lines.length-1] = changed;
    $('.active').removeClass('active');
    // continue
    currentLineIndex++;
    printLine();
  }
});

// handle typing name
$('body').keypress(function(e){
  e.preventDefault();
  if (typing){
    if (e.which <= 57 && e.which >= 48 || e.which >= 97 && e.which <= 122 || e.which >= 65 && e.which <= 90){
      //was a letter
      var c = String.fromCharCode(e.which);
      playSound();
      $('.active').append(c);
    }
  }
});

// print the next line (based on currentLineIndex variable)
function printLine(){
  var line = lines[currentLineIndex];
  var divHolders = $(`<div class='instruction-screen'>
                      <div class='printed'>
                      </div>
                    </div>`);
  $('.game').append(divHolders);
  // add a new active line
  var newLine = $(`<p class='active'></p>`);
  $('.printed').append(newLine);
  $('.active').append('> ');
  if (currentLineIndex == lines.length - 2){
    // we're on the name entry line
    typing = true;
  } else {
    printLetter(0);
  }
}

// pick a random keysound to play
function playSound(){
  var sounds = ['k1', 'k2', 'k3', 'k4'];
  var randomId = sounds[Math.floor(Math.random() * 4)];
  document.getElementById(randomId).play();
}

// print letter at index i of lines[currentLineIndex]
function printLetter(i){
  if (i == lines[currentLineIndex].length){
    // we've finished printing this line
    $('.active').removeClass('active');
    currentLineIndex++;
    if (currentLineIndex < lines.length) {
      // if there are more lines
      setTimeout(printLine, 5); // make this 500 again
    }
  } else {
    // print a letter
    playSound();
    $('.active').append(lines[currentLineIndex][i]);
    setTimeout(printLetter, 2, i+1); //make this 75 again
  }
}

// this function is a wrapper to be called
function displayInstructions(){
  typing = false;
  name = '';
  currentLineIndex = 0;
  // call the first line to be printed
  printLine();
}
