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
//  let scoreCount = 0;
/*
function nextQuestion(){
    $('.questionAsked').on('click', '.startTest, function (event) {

}*//*
function checkAnswer () {
    $('.questionBox').on('click', '.submitAnswer'  function (event){
        $('.questionBox').css('display', 'hidden');
    });
}*/
function getUserChoice () {
$('form').on('submit', function (event) {
    event.preventDefault();
    let userChoice = $('input:checked');
    let answer = userChoice.val();
    let correctAnswer = `${COUNTRYDATA[questionNumber].correctAnswer}`;
    if (answer === correctAnswer) {
      $('fieldset').css('display', 'none');
    }
  });
}

function nextQuestion() {
    $('header').css('color', 'black');
    $('.questionNumber').text('1');
    $('label[for = choice1]').html(COUNTRYDATA[0].answers[0]);
    $('label[for = choice2]').html(COUNTRYDATA[0].answers[1]);
    $('label[for = choice3]').html(COUNTRYDATA[0].answers[2]);
    $('label[for = choice4]').html(COUNTRYDATA[0].answers[3]);
}


function startQuiz(){
  $('.initialStart').on('click','.startTest', function (event){   
    $('.initialStart').remove();
    $('body').css('background-image', 'url(https://i.pinimg.com/originals/c7/d9/c3/c7d9c3323f7c1828b1ceaee5facb2791.jpg)');
    $('.questionForm').css('display','block');
    $('.questionAsked').html(COUNTRYDATA[0].questions);
    $('.flagBox').css({ background:COUNTRYDATA[0].icon, 'background-size':'contain'});
    nextQuestion();
  });
}

function takeQuiz(){
  startQuiz();

}

$(takeQuiz);



















