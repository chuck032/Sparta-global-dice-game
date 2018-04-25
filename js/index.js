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
      var oneDot = document.getElementById('single');
      oneDot.classList.add("dot");
    return;
      break;

      //Roll two
    case 2:
      var twoDot = document.getElementsByClassName('double');
      for (var i = 0; i < twoDot.length; i++) {
        twoDot[i].classList.add("dot");
      }
    return;
      break;

      //Roll three
    case 3:
      var threeDot = document.getElementsByClassName('triple');
      for (var i = 0; i < threeDot.length; i++) {
        threeDot[i].classList.add("dot");
      }
    return;
      break;

      //Roll four
    case 4:
      var fourDot = document.getElementsByClassName('quad');
      for (var i = 0; i < fourDot.length; i++) {
        fourDot[i].classList.add("dot");
      }
    return;
      break;

      //Roll five
    case 5:
      var fiveDot = document.getElementsByClassName('pent');
      for (var i = 0; i < fiveDot.length; i++) {
        fiveDot[i].classList.add("dot");
      }
    return;
      break;

      //Roll Six
    default:
      var sixDot = document.getElementsByClassName('hex');
      for (var i = 0; i < sixDot.length; i++) {
        sixDot[i].classList.add("dot");
      }
    return;
  }
}

//Invoke functions
diceRoll();
rollNum();
