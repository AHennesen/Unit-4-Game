// game.js
// make a number for the user to guess.

var targetNumber = Math.floor(Math.random() * 120) + 19;
$("#number-to-guess").text(targetNumber);


var counter = 0;
var wins = 0;
var losses = 0

var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (var i = 0; i < 4; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "http://lorempixel.com/output/city-q-c-100-100-10.jpg");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
}



$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#counter-total").text(counter);

    if (counter === targetNumber) {
        wins++;
        alert("You win!");
        $("#wins-total").text(wins);
        targetNumber = Math.floor(Math.random() * 120) + 19;
        $("#number-to-guess").text(targetNumber);
        counter = 0;
    }
    else if (counter >= targetNumber) {
        losses++;
        alert("You lose!!");
        $("#losses-total").text(losses);
        targetNumber = Math.floor(Math.random() * 120) + 19;
        $("#number-to-guess").text(targetNumber);
        counter = 0;
      }
    });