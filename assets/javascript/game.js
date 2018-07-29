// four crystals displayed as buttons on the page.
// random target number at the start of the game.
// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
// When they click one of the crystals, update the player's score counter.
// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.
// The game restarts whenever the player wins or loses.
// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.

//--------Variables---------

var goal = ''; //or 0?
var score = '';
var win= '';
var lose = '';
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;

//--------Functions----------

  $(document).ready(function() {


   function randomStart() {
      var randomNumbers = Math.floor(Math.random() * 120) + 19;
      $("#target-score").text(randomNumbers);
    };

    $("#crystal1").on("click", function randomValue() {
        var randomNumbers = Math.floor(Math.random() * 12) + 1;
        $("#points").text(randomNumbers);
      });

//---------Main Process--------    
    randomStart();

    // $(".crystal").on("click", function() {
    //     number = $(this).attr('value');
    //     console.log("clicked " + number);
    //     if (num1updated) {
    //       updateNum2(number)
    //     } else {
    //       updateNum1(number);
    //     }
    //   });



  });
