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
var gameHTML;
var pixarQuestions = [
    'What is the name of the ball with a star that appears in many Pixar films?',
    'Name the boy who terrifies the toys in \"Toys Story\"',
    'What is Wall-E\'s primary function?',
    'What exactly is Monsters, INC. in the 2001 film of the same name?',
    'In the 2012 Pixar film \"Brave\", eating magic cake turns Merida\'s mom into what?',
    'What\'s the great white shark called in \"Finding Nemo\"?',
    'Can you name the villain from \"The Incredibles\"?',
    'Name the main character for the movie \"A Bug\'s Life\"',

];

var pixarChoices = [
    ['Bouncer', 'Andy Ball', 'The Luxo Ball', 'The BNL Ball'],
    ['Al', 'Sid', 'Andy', 'Buster'],
    ['Loading and unloading', 'Maintenance Robot', 'To Alert earht\'s survivors to reemerge of plant life', 'Garbage Compressor'],
    ['Factory that makes monster-sized shoes', 'Chain of hair salons', 'Factory that processes screams', 'Restaurant that caters to monters'],
    ['A deer', 'A bear', 'A goat', 'A spider'],
    ['Shelby', 'Randy', 'Alan', 'Bruce'],
    ['O-Zone', 'Syndrome', 'Spyro', 'Lava'],
    ['Antz', 'Hopper', 'Molt', 'Flik'],

];

var pixarAnswers = [
    'C. The Luxo Ball',
    'B. Sid',
    'D. Garbage Compressor',
    'C. Factory that processes screams',
    'B. A bear',
    'D. Bruce',
    'B. Syndrome',
    'D. Flik'
];

var imageArray = new Array();
imageArray[0] = "<div class='img-fluid mx-auto d-block' style='width:50%;height:0;padding-bottom:20%;position:relative;'><iframe src='https://giphy.com/embed/SzEt86U0vgFos' width='100%' height='100%' style='position:absolute' frameBorder='0' class='giphy-embed' allowFullScreen></iframe></div><p><a href='https://giphy.com/gifs/disneypixar-disney-pixar-SzEt86U0vgFos'>via GIPHY</a></p>";
imageArray[1] = "<div class='img-fluid mx-auto d-block' style='width:50%;height:0;padding-bottom:20%;position:relative;'><iframe src='https://giphy.com/embed/RIVu1bR7N2jEA' width='100%' height='100%' style='position:absolute' frameBorder='0' class='giphy-embed' allowFullScreen></iframe></div><p><a href='https://giphy.com/gifs/disney-laughing-pixar-RIVu1bR7N2jEA'>via GIPHY</a></p>";
imageArray[2] = "<div class='img-fluid mx-auto d-block' style='width:50%;height:0;padding-bottom:20%;position:relative;'><iframe src='https://giphy.com/embed/QUBzud324iCnC' width='100%' height='100%' style='position:absolute' frameBorder='0' class='giphy-embed' allowFullScreen></iframe></div><p><a href='https://giphy.com/gifs/wall-e-QUBzud324iCnC'>via GIPHY</a></p>";
imageArray[3] = "<div class='img-fluid mx-auto d-block' style='width:50%;height:0;padding-bottom:20%;position:relative;'><iframe src='https://giphy.com/embed/mDLkpVWddyqqI' width='100%' height='100%' style='position:absolute' frameBorder='0' class='giphy-embed' allowFullScreen></iframe></div><p><a href='https://giphy.com/gifs/monsters-inc-boo-mDLkpVWddyqqI'>via GIPHY</a></p>";
imageArray[4] = "<div class='img-fluid mx-auto d-block' style='width:50%;height:0;padding-bottom:20%;position:relative;'><iframe src='https://giphy.com/embed/f8mf5gxhLjK3m' width='100%' height='100%' style='position:absolute' frameBorder='0' class='giphy-embed' allowFullScreen></iframe></div><p><a href='https://giphy.com/gifs/pixar-brave-f8mf5gxhLjK3m'>via GIPHY</a></p>";
imageArray[5] = "<div class='img-fluid mx-auto d-block' style='width:50%;height:0;padding-bottom:20%;position:relative;'><iframe src='https://giphy.com/embed/jXjqDn2QZSYTu' width='100%' height='100%' style='position:absolute' frameBorder='0' class='giphy-embed' allowFullScreen></iframe></div><p><a href='https://giphy.com/gifs/disneypixar-disney-pixar-jXjqDn2QZSYTu'>via GIPHY</a></p>";
imageArray[6] = "<div class='img-fluid mx-auto d-block' style='width:50%;height:0;padding-bottom:20%;position:relative;'><iframe src='https://giphy.com/embed/12lTl48iUkwLHq' width='100%' height='100%' style='position:absolute' frameBorder='0' class='giphy-embed' allowFullScreen></iframe></div><p><a href='https://giphy.com/gifs/pixar-the-incredibles-pixaredit-12lTl48iUkwLHq'>via GIPHY</a></p>";
imageArray[7] = "<div class='img-fluid mx-auto d-block' style='width:50%;height:0;padding-bottom:20%;position:relative;'><iframe src='https://giphy.com/embed/VziQN59EgpNCg' width='100%' height='100%' style='position:absolute' frameBorder='0' class='giphy-embed' allowFullScreen></iframe></div><p><a href='https://giphy.com/gifs/disneypixar-disney-pixar-VziQN59EgpNCg'>via GIPHY</a></p>";

var counter = 30;
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;

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
        $('.imgHolder').hide();

        //new question until the player answers it or their time runs out.
        questionOnScreen();
        timerWrapper();

    });

    $('body').on('click', '.answer', function (event) {

        selectedAnswer = $(this).text();
        selectedAnswer === pixarAnswers[questionCounter] ? (//alert('correct');
            clearInterval(theClock),
            generateWin()) :
            (clearInterval(theClock),
                generateLoss())
    });

    $('body').on('click', '.reset-button', function (event) {
        resetGame();
    });

});

function timeoutLoss() {
    unansweredTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time! The correct answer is: " + pixarAnswers[questionCounter] + "<div class='img-fluid mx-auto d-block' style='width:500%;height:0;padding-bottom:20%;position:relative;'><iframe src='https://giphy.com/embed/SXCQWrsob9TGg' width='100%' height='100%' style='position:absolute' frameBorder='0' class='giphy-embed' allowFullScreen></iframe></div><p><a href='https://giphy.com/gifs/disney-pixar-sadness-SXCQWrsob9TGg'>via GIPHY</a></p>" + "</p>";
    $('#mainContent').html(gameHTML);
    setTimeout(wait, 4000);
}

function generateWin() {
    correctTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + pixarAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
    $('#mainContent').html(gameHTML);
    setTimeout(wait, 4000);
}

function generateLoss() {
    incorrectTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: " + pixarAnswers[questionCounter] + "</p>" + "<div class='img-fluid mx-auto d-block' style='width:50%;height:0;padding-bottom:20%;position:relative;'><iframe src='https://giphy.com/embed/u9PFMAh6hQQy4' width='100%' height='100%' style='position:absolute' frameBorder='0' class='giphy-embed' allowFullScreen></iframe></div><p><a href='https://giphy.com/gifs/3-violet-parr-i-just-really-wanted-to-do-a-comparative-compilation-like-this-u9PFMAh6hQQy4'>via GIPHY</a></p>" + "</p>";
    $('#mainContent').html(gameHTML);
    setTimeout(wait, 4000);
}

function questionOnScreen() {
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + pixarQuestions[questionCounter] + "</p><p class='first-answer answer'>A. " + pixarChoices[questionCounter][0] + "</p><p class='answer'>B. " + pixarChoices[questionCounter][1] + "</p><p class='answer'>C. " + pixarChoices[questionCounter][2] + "</p><p class='answer'>D. " + pixarChoices[questionCounter][3] + "</p>";
    $('#mainContent').html(gameHTML);
};

function wait() {
    questionCounter < 7 ?
        (questionCounter++ ,
            questionOnScreen(),
            counter = 30,
            timerWrapper()) :
        (finalScreen())
}
;

function timerWrapper() {
    theClock = setInterval(thirtySeconds, 1000);
    function thirtySeconds() {
        if (counter === 0) {
            clearInterval(theClock);
            timeoutLoss();
        }
        if (counter > 0) {
            counter--;
        }
        $('.timer').html(counter);
    }
}

function finalScreen() {
    gameHTML = "<div class='imgHolder'><img src='assets/images/TriviaLogo.png' class='img-fluid mx-auto d-block' alt='Responsive image'></div>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-warning btn-md btn-lg reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
    $('#mainContent').html(gameHTML);
}

function resetGame() {
    questionCounter = 0;
    correctTally = 0;
    incorrectTally = 0;
    unansweredTally = 0;
    counter = 30;
    questionOnScreen();
    timerWrapper();
}