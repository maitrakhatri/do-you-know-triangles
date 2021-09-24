var quizForm = document.querySelector("#quizform")
var submitButton = document.querySelector("#submit-btn")
var result = document.querySelector("#result")

var correctAnswers = ["scalene triangle", "right angle triangle", "1 ⁄ 2 × bh"];

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

    result.innerText = "Your Score is " + score;
}

submitButton.addEventListener('click', calculateScore)