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
let questionNumber = 1;
let score = 0;

// function onNextQuestion(){
//   $('button').on('click', '.nextButton', function(event){
//     console.log(questionNumber);
//     event.preventDefault();

//     $('input:checked').val() ? nextQuestion() : alert('button not clicked');
//     $('.questionForm').css('visibility', 'visible');
// });
// }


// function createNextQuestion() {
//   nextQuestion();
//   questionNumber++;
// }
function changeScore() {
  score++;
}

function updateScore() {
  changeScore();
  $('.scoreCount').text(score);
}

function answerIsCorrect() {
  correctAnswerScreen();
  updateScore();
}

function correctAnswerScreen(){
  $('.questionForm').css('visibility', 'hidden' );
  $('.questionFormAnswer').html(`<div class = 'greatJob'> <div> <p>That is the correct answer!</p> <button class = 'nextButton'>NEXT </button></div> </div>`);
  $('.greatJob').on('click', '.nextButton', function(event){
    console.log('nextQuestion');
    nextQuestion();
    });
}

function wrongAnswerScreen() {
  $('.questionForm').css('visibility', 'hidden' );
  $('.questionFormAnswer').html(`<div class = 'sorry'> <div><p>That is the incorrect answer</p> <button class = 'nextButton'>NEXT </button></div> </div>`);
  $('.sorry').on('click', '.nextButton', function(event){
    console.log('nextQuestion');
    nextQuestion();
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
    questionNumber++;
    $('input:checked') ? 
           checkAnswer() :
        wrongAnswerScreen ();
}); 
}

function nextQuestion() {
    //document.getElementsByClassName("questionForm").reset();
    $('.initialStart').remove();
    $('.questionForm').css('display','block');
    $('.questionForm').css('visibility', 'visible');
    $('header').css('color', 'black');
    let sizeOfDataObject = COUNTRYDATA.length;
    console.log(sizeOfDataObject);
    console.log(questionNumber-1);
      if  ((questionNumber-1) < sizeOfDataObject) {
        $('.questionAsked').html(COUNTRYDATA[questionNumber-1].questions);
        $('.flagBox').css({ background:COUNTRYDATA[questionNumber-1].icon, 'background-size':'contain'});
        $('.questionNumber').text(questionNumber);
        $('span[for = choice1]').html(COUNTRYDATA[questionNumber-1].answers[0]);
        $('span[for = choice2]').html(COUNTRYDATA[questionNumber-1].answers[1]);
        $('span[for = choice3]').html(COUNTRYDATA[questionNumber-1].answers[2]);
        $('span[for = choice4]').html(COUNTRYDATA[questionNumber-1].answers[3]);
      }
}


function startQuiz(){
  $('.initialStart').on('click','.startTest', function (event){   
    $('.initialStart').remove();
    $('body').css('background-image', 'url(https://i.pinimg.com/originals/c7/d9/c3/c7d9c3323f7c1828b1ceaee5facb2791.jpg)');
    $('.questionForm').css('display','block');
    nextQuestion();
    // $('.questionAsked').html(COUNTRYDATA[0].questions);
    // $('.flagBox').css({ background:COUNTRYDATA[0].icon, 'background-size':'contain'});
    // $('.questionNumber').text(1);
    // nextQuestion();
  });
}

function takeQuiz(){
  startQuiz();
  onSubmit();
  //onNextQuestion();
}

$(takeQuiz);



















