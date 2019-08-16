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
//  let questionNumber = 0;
//  let scoreCount = 0;

function startQuiz(){
    $('.initialStart').on('click','.startTest', function (event){
        
        $('.initialStart').remove();
        $('questionForm').css('display','block');
        $('questionNumber').text(1);
        
    });
}



function takeQuiz(){
startQuiz();

}

$(takeQuiz)



















