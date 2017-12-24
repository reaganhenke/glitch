function displayInstructions(){
  console.log('i am displaying instructions');
  console.log(instructionText);
  var divHolders = $(`<div class='instruction-screen'>
                      <div class='printed'>
                      <p>hello</p>
                      <p class='active'>hello aagin</p>
                      </div>
                    </div>`);
  $('.game').append(divHolders);
  for (var i=0; i<instructionText.length; i++){

  }


}
