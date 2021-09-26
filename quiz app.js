var quizForm = document.querySelector("#quizform")
var submitButton = document.querySelector("#submit-btn")
var result = document.querySelector("#result")

var correctAnswers = ["scalene triangle", "right angle triangle", "1 ⁄ 2 × bh", "90", "120", "all 3 angles same", "45",  "greater than third side"];

var radioButton = document.getElementsByTagName('input');

function showMessage(message) {
    result.style.display = "block";
    result.innerText = message;
}

function submitButtonHandler(){
   
    var counter = 0;
    for(i=0; i < radioButton.length; i++){
    
        if (radioButton[i].type === 'radio' && radioButton[i].checked) {
            counter = counter+1;
        }
    }

    if(counter == radioButton.length/3) {
        calculateScore();
    }
    else {
        showMessage("Attempt all the question")
    }
}


function calculateScore(){
    
    var score = 0;
    var index = 0;

    var formResults = new FormData(quizForm);

    for(let value of formResults.values()) {
        if(value === correctAnswers[index]){
            score = score + 1;
        }
        index = index +1;
    }
    showMessage("Your Score is: " + score);
}

submitButton.addEventListener('click', submitButtonHandler)