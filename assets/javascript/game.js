// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.
// The game restarts whenever the player wins or loses.
// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

//--------Variables---------

var randomNumber = 0;
var pointTotal = 0;
// var win = 0;
// var lose = 0;
var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;

//--------Functions----------

$(document).ready(function() {

    //set target number
    function randomStart() {
      var randomNumber = Math.floor(Math.random() * 120) + 19;
      $("#target-score").text(randomNumber);
    }
    

//---------Main Process--------    
    randomStart();

    //adding crystal value to total score
    $("#crystal1").on("click", function (){
        pointTotal += crystal1;
        console.log("Crystal 1 is worth: " + crystal1 + " & total score is: " + pointTotal)
        $("#points").text(pointTotal); 
    })

    $("#crystal2").on("click", function (){
        pointTotal += crystal2;
        console.log("Crystal 2 is worth: " + crystal2 + " & total score is: " + pointTotal)
        $("#points").text(pointTotal);
    })
    $("#crystal3").on("click", function (){
        pointTotal += crystal3;
        console.log("Crystal 3 is worth: " + crystal3 + " & total score is: " + pointTotal)
        $("#points").text(pointTotal);
    })
    $("#crystal4").on("click", function (){
        pointTotal += crystal4;
        console.log("Crystal 4 is worth: " + crystal4 + " & total score is: " + pointTotal)
        $("#points").text(pointTotal);
    })

    // if (pointTotal === randomNumber) {
    //     console.log("you win");
    // } 

});