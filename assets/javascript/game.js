$(document).ready(function () {
  
  var randomNum = 0;
  var crystal1 = 0;
  var crystal2 = 0;
  var crystal3 = 0;
  var crystal4 = 0;
  
  var totalScore = 0;
  var wins = 0;
  var losses = 0;
  
   crystal1 = Math.floor((Math.random() * 11)+ 1); 
   crystal2 = Math.floor((Math.random() * 11)+ 1);
   crystal3 = Math.floor((Math.random() * 11)+ 1);
   crystal4 = Math.floor((Math.random() * 11)+ 1);
  randomNum = Math.floor((Math.random() * 101)+ 19);
  $("#randomNum").text(randomNum);
//   $("#wins").text(wins);
//   $("#losses").text(losses);
  function resetGame() {
    randomNum = Math.floor((Math.random() * 101)+ 19);

    $("#randomNum").text(randomNum);
  
    crystal1 = Math.floor((Math.random() * 11)+ 1);//random numbers for crystals
  //   console.log(crystal1);
    crystal2 = Math.floor((Math.random() * 11)+ 1);
  //   console.log(crystal2);
    crystal3 = Math.floor((Math.random() * 11)+ 1);
  //   console.log(crystal3);
    crystal4 = Math.floor((Math.random() * 11)+ 1);
  //   console.log(crystal4);
    totalScore = 0;
  $("#totalScore").text("Your Total Score: " + totalScore);

};
function numberCheck() {
    if (totalScore === randomNum) {
        wins++;
        $("#wins").append(wins);
        alert("You're a winner!! You matched your Total Score " + totalScore + ", to the random number " + randomNum + "." );
        resetGame();
        
    } else if (totalScore > randomNum) {
        losses++;
        $("#losses").append(losses);
        alert("You lost! Your Total Score, " + totalScore + ", didn't match the random number, " + randomNum + ".");
        resetGame();
    }
    };
    
  //adding crystals to the totalScore
  $("#crystal1").click(function(){
      totalScore += crystal1;
      $("#totalScore").text("Your Total Score: " + totalScore); 
      numberCheck();
  })
  $("#crystal2").click(function(){
      totalScore += crystal2;
      $("#totalScore").text("Your Total Score: " + totalScore);
      numberCheck(); 
  })
  $("#crystal3").click(function(){
      totalScore += crystal3;
      $("#totalScore").text("Your Total Score: " + totalScore);
      numberCheck();
  })
  $("#crystal4").click(function(){
      totalScore += crystal4;
      $("#totalScore").text("Your Total Score: " + totalScore);
      numberCheck();
  })
//   console.log("randomNum" + randomNum);
//   console.log("totalScore" + totalScore);
   //reset and win and lose
 
  

  });

/**
 * 1. a random number is displayed
 * 2. 4 crystaks are displayed
 * 3. a set of instructions are on the page
 * 4. places for wins and losses and a score
 * 
 * 5. user clicks a crystal
 * 6. add the value of the crystal to the score, show score
 * 7. check score for end condition
 * 8. if score is under randomnumber value - repeat steps
 * 7. else end game
 * 
 * win: score === randomnumber
 *      add 1 to wins
 *      set alert message to win
 * loss: score > randomnumber
 *      add 1 to losses
 *      set message to loss
 * 
 * reset game
 */

