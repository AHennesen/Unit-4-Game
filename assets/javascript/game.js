// game.js
// make a number for the user to guess.

var targetNumber = Math.floor(Math.random() * 120) + 19;
$("#number-to-guess").text(targetNumber);


var counter = 0;
var wins = 0;
var losses = 0
var imgs = ["https://i.pinimg.com/originals/58/3d/8c/583d8c0fcc57e936b0a3257f2f3bf52d.jpg",
"https://wow.zamimg.com/uploads/screenshots/small/69902.jpg",
"http://farm4.static.flickr.com/3073/3036157673_b51b1c65cb_o.png",
"https://crystal-information.com/wp-content/uploads/2015/02/citrine-quartz-example-7.jpg",]

for (var i = 0; i < 4; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", imgs[i]);
    imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 12) +1);
    $("#crystals").append(imageCrystal);
}



$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#counter-total").text(counter);

    if (counter === targetNumber) {
        wins++;
        $("#wins-total").text(wins);
        targetNumber = Math.floor(Math.random() * 120) + 19;
        $("#number-to-guess").text(targetNumber);
        counter = 0;
    }
    else if (counter >= targetNumber) {
        losses++;
        $("#losses-total").text(losses);
        targetNumber = Math.floor(Math.random() * 120) + 19;
        $("#number-to-guess").text(targetNumber);
        counter = 0;
      }
    });