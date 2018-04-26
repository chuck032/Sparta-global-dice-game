// Function for diceroll
var diceRoll = function(){
  var dice = [1,2,3,4,5,6];
  var diceRoll = dice[(Math.floor(Math.random() * Math.floor(6)))];
  return diceRoll;
}

//Function to show what happens when each number is rolled
function rollNum() {
  var val1 = diceRoll();
  switch (val1) {
    //Roll one
    case 1:
      oneDot();
    return;
      break;

      //Roll two
    case 2:
      twoDot();
    return;
      break;

      //Roll three
    case 3:
      threeDot();
    return;
      break;

      //Roll four
    case 4:
      fourDot()
    return;
      break;

      //Roll five
    case 5:
      fiveDot()
    return;
      break;

      //Roll Six
    default:
      sixDot()
    return;
  }
}

//Function for one
function oneDot(){
  var oneDot = document.getElementById('single');
  oneDot.classList.add("dot");
}

//Function for two
function twoDot(){
  var twoDot = document.getElementsByClassName('double');
  for (var i = 0; i < twoDot.length; i++) {
    twoDot[i].classList.add("dot");
  }
}

//Function for three
function threeDot(){
  var threeDot = document.getElementsByClassName('triple');
  for (var i = 0; i < threeDot.length; i++) {
    threeDot[i].classList.add("dot");
  }
}

//Function for four
function fourDot(){
  var fourDot = document.getElementsByClassName('quad');
  for (var i = 0; i < fourDot.length; i++) {
    fourDot[i].classList.add("dot");
  }
}

//Function for five
function fiveDot(){
  var fiveDot = document.getElementsByClassName('pent');
  for (var i = 0; i < fiveDot.length; i++) {
    fiveDot[i].classList.add("dot");
  }
}

//Function for Six
function sixDot(){
  var sixDot = document.getElementsByClassName('hex');
  for (var i = 0; i < sixDot.length; i++) {
    sixDot[i].classList.add("dot");
  }
}

//Function for button
function buttonRoll(){
  var clickRoll = document.getElementsByClassName('innerSquare');
  for (var i = 0; i < clickRoll.length; i++) {
    clickRoll[i].classList.remove("dot");
  }
  diceRoll();
  rollNum();
}
