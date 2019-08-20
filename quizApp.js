/**
 * 1) begin function to start -> enable start button function
 * 2)generate the question/change image of the new questions/change background image  of the page -> 
 * function that changes to the next question
 * 3)function to not allow skipping of questions -> possibly merge with generate function 
 * submit answer selected function -> user selects function
 * 4)change the number of the question  -> change header number of question we are on
 * 5)change the score -> update score function
 * 6)compare answer selected to right answer -> if wrong or right function
 * generate the response -> "correct " or "wrong"
 * 7)results page -> include final results on quiz and a reset quiz button
 *   
 */
'use strict' 
let questionNumber = 0;
let score = 0;
const NUMBEROFQUESTIONS = 5;

function finalPage(){
  $('.questionFormAnswer').html(`<div class = 'response'> <div> <p> You are finished! Your score is ${score} </p> <button class = 'finalButton'> RESTART </button></div> </div>`);
  $('.response').on('click', '.finalButton', function(event){
    $('.questionForm').hide();
    $('.response').css('visibility', 'hidden');
    $('body').css('background-image', 'url(https://bit.ly/2FwISzd)');
    score = 0;
    formReload();
    questionNumber = 0;
  });
}

function formReload() {
  $('.starterPage').children().show();
  console.log("You have reloaded the form");
  $('.scoreCount').text(score);
  restartQuiz();
}

function restartQuiz (){
  $('.initialStart').on('click','.startTest', function (event){   
    $('.questionForm').css('display','block');
    $('.questionForm').css('visibility', 'visible');
    $('.starterPage').children().hide();
    $('body').css('background-image', 'url(https://i.pinimg.com/originals/c7/d9/c3/c7d9c3323f7c1828b1ceaee5facb2791.jpg)');
    $('.questionForm').css('display','block');
    questionNumber--;
    nextQuestion();
  });
}

function clearUserData(){
    score = 0;
    questionNumber = 0;
    $('.questionNumber').text(questionNumber);
    $('.scoreCount').text(score);
}

function changeScore() {
  score++;
}

function updateScore() {
  changeScore();
  $('.scoreCount').text(score);
}

function correctAnswerScreen(){
  updateScore();
  $('input[type="radio"]').prop('checked', false);
  $('.questionForm').css('visibility', 'hidden' );
  $('.questionFormAnswer').html(`<div class = 'response'> <div> <p>That is the correct answer!</p> <button class = 'nextButton'>NEXT </button></div> </div>`);
  $('.response').on('click', '.nextButton', function(event){
    console.log('nextQuestion');
    if (questionNumber < NUMBEROFQUESTIONS){
      nextQuestion();
    }
    else if (questionNumber === NUMBEROFQUESTIONS) {
      finalPage();
    }
  });
}

function wrongAnswerScreen() {
  $('input[type="radio"]').prop('checked', false);
  $('.questionForm').css('visibility', 'hidden' );
  $('.questionFormAnswer').html(`<div class = 'response'> <div><p>That is the incorrect answer</p> <button class = 'nextButton'>NEXT </button></div> </div>`);
  $('.response').on('click', '.nextButton', function(event){
    console.log('nextQuestion');
    if (questionNumber < 5){
      nextQuestion();
    }
    else if (questionNumber = 5) {
      finalPage();
    }
  });
}

function checkAnswer(){
  event.preventDefault();
  let userAns = $("input[name='currentOption']:checked").parent('label').text();
  let trimAnswer = userAns.trim();
  let correctAns = `${COUNTRYDATA[questionNumber-1].correctAnswer}`;
  (trimAnswer === correctAns) ? correctAnswerScreen() : wrongAnswerScreen();  
}

function onSubmit(){
  $('form').on('submit', function(event){
    event.preventDefault();
    if (questionNumber <= 5){
      $('input:checked') ? 
        checkAnswer() :
        wrongAnswerScreen ();
    }
    else startQuiz();
  }); 
}

function nextQuestion() {
  questionNumber++;
  let site = null;
  $('.response').css('visibility', 'hidden');
  $('.questionForm').css('display','block');
  $('.questionForm').css('visibility', 'visible');
  $('header').css('color', 'black');
  let sizeOfDataObject = COUNTRYDATA.length;
  if (questionNumber >= 1 && questionNumber <= 5){
    site = COUNTRYDATA[questionNumber-1].background;
  }
  $('body').css('background-image', site);
  if  ((questionNumber-1) < sizeOfDataObject) {
    $('.questionAsked').html(COUNTRYDATA[questionNumber-1].questions);
    $('.flagBox').css({ background:COUNTRYDATA[questionNumber-1].icon, 'background-size':'contain'});
    $('.questionNumber').text(questionNumber);
    $('span[for = choice1]').html(COUNTRYDATA[questionNumber-1].answers[0]);
    $('span[for = choice2]').html(COUNTRYDATA[questionNumber-1].answers[1]);
    $('span[for = choice3]').html(COUNTRYDATA[questionNumber-1].answers[2]);
    $('span[for = choice4]').html(COUNTRYDATA[questionNumber-1].answers[3]);
  }
  else {
    finalPage();
  }
}


function startQuiz(){
  $('.initialStart').on('click','.startTest', function (event){   
    $('.questionForm').css('display','block');
    $('.questionForm').css('visibility', 'visible');
    $('.starterPage').children().hide();
    $('body').css('background-image', 'url(https://i.pinimg.com/originals/c7/d9/c3/c7d9c3323f7c1828b1ceaee5facb2791.jpg)');
    $('.questionForm').css('display','block');
    nextQuestion();
  });
}

function takeQuiz(){
  startQuiz();
  onSubmit();
}

$(takeQuiz);



















