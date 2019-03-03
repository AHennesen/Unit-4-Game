// game.js
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
// make a number for the user to guess.
var targetNumber = Math.floor(Math.random() * 120) + 19;
$("#number-to-guess").text(targetNumber);

