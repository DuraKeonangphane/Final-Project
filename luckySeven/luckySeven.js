function play(){
  var betInput = document.forms["luckySeven"]["betInput"].value;
  var bet = betInput;
  var betArray = [];
  var die1 = 0;
  var die2 = 0;
  var diceTotal = 0;
  var win = 4;
  var loses = 1;
  var losesCount = 0;
  
 /*If bet input is equal or less than 0. Create an alert.*/
  if(betInput <= 0){
    alert("Starting bet must be greater than 0.");
  }
  else{
  while(bet > 0){
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    diceTotal = die1 + die2;
    if(diceTotal == 7){
      bet += win;
      betArray.push(bet);
    }
    else{
      bet -= loses;
      losesCount++;
    }
  }
  
  /*Find the length of the array
  find the position of the array with
  the max amount and the index.*/  
  var counter = betArray.length;
  var highest= Math.max.apply(Math, betArray);
  var highestPosition = betArray.indexOf(highest);
  var rollsCount = counter - highestPosition;

    
document.getElementById("results").style.display = "block";
document.getElementById('startingBet').innerText = "$" + betInput + ".00";
document.getElementById('totalRolls').innerText = losesCount;
document.getElementById('highestAmountWon').innerText = "$" +highest+".00";
  document.getElementById('highestRollCount').innerText = rollsCount;
return false;
}
}
