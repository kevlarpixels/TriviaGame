/* You'll create a trivia game that shows only one question until the player answers it or their time runs out.

* If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

* The scenario is similar for wrong answers and time-outs.

  * If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
  * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

* On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

//My notes//
/* INPUT
player
question
answer
Time
correct answers
incorrect answers


*PROCESS
Start window with a buttom to start game


If the player selects the correct answer, show a screen congratulating them for choosing the right option. 
After a few seconds, display the next question -- do this without user input.
* The scenario is similar for wrong answers and time-outs.

  * If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
  * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

*OUTPUT
* On the final screen, show the number of correct answers, incorrect answers, 
and an option to restart the game (without reloading the page).*/


var startingWindow;
var pixarQuestions = [

]

var pixarChoices =  [

]

var pixarAnswers = [
    
]


//Start window with a buttom to start game//
$(document).ready(function () {

    function startingPage() {
        startingWindow = "<p class='text-center main-button-container'><a class='btn btn-primary btn-md btn-lg start-button' href='#' role='button'>Start Game</a></p>";
        $('#mainContent').append(startingWindow);
    }

    startingPage();

    //Game that shows only one question after start button click

    $('#mainContent').on('click', ".start-button", function (event) {
        event.preventDefault();
        $('.jumbotron').hide();
    })

    //ne question until the player answers it or their time runs out.



});

