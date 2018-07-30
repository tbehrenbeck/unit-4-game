// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.
// The game restarts whenever the player wins or loses.
// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

//--------Variables---------

var randomNumber = 0;
var pointTotal = 0;
var win = 0;
var lose = 0;
var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;

//--------Functions----------

$(document).ready(function() {

    //set target number
    function randomStart() {
      randomNumber = Math.floor(Math.random() * 120) + 19;
      $("#target-score").text(randomNumber);
    }

   
    //calculating wins/ losses
    function winLose() {
        if (pointTotal === randomNumber) {
            win++
            alert("You won! Click OK to play again.")
            $("#winning").text(win);
            reset();
        } 
        else if (pointTotal > randomNumber) {
            lose++
            alert("Better luck next time. Click OK to play again!")
            $("#losing").text(lose);
            reset();
        }
    }

    function reset() {
        randomNumber =0;
        pointTotal = 0;
        $("#target-score").text(randomNumber);
        $("#points").text(pointTotal);
        crystal1 = Math.floor(Math.random() * 12) + 1;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = Math.floor(Math.random() * 12) + 1;
        crystal4 = Math.floor(Math.random() * 12) + 1;
        randomStart();
    }
       
     
    

//---------Main Process--------    
    randomStart();

    //adding crystal value to total score
    $("#crystal1").on("click", function (){
        pointTotal += crystal1;
        console.log("Crystal 1 is worth: " + crystal1 + " & total score is: " + pointTotal)
        $("#points").text(pointTotal);
        winLose();
    })
    $("#crystal2").on("click", function (){
        pointTotal += crystal2;
        console.log("Crystal 2 is worth: " + crystal2 + " & total score is: " + pointTotal)
        $("#points").text(pointTotal);
        winLose();
    })
    $("#crystal3").on("click", function (){
        pointTotal += crystal3;
        console.log("Crystal 3 is worth: " + crystal3 + " & total score is: " + pointTotal)
        $("#points").text(pointTotal);
        winLose();
    })
    $("#crystal4").on("click", function (){
        pointTotal += crystal4;
        console.log("Crystal 4 is worth: " + crystal4 + " & total score is: " + pointTotal)
        $("#points").text(pointTotal);
        winLose();
    })


});

