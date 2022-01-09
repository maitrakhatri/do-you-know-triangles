const quizForm = document.querySelector("#quizform")
const submitButton = document.querySelector("#submit-btn")
const result = document.querySelector("#result")
const correctAnswers = ["scalene triangle", "right angle triangle", "1 ⁄ 2 × bh", "90", "120", "all 3 angles same", "45",  "greater than third side"];
const radioButton = document.getElementsByTagName('input');

function showMessage(message) {
    result.style.display = "block";
    result.innerText = message;
}



const submitButtonHandler = () => {
   
    let counter = 0;
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


const calculateScore = () => {
    
    let score = 0;
    let index = 0;

    let formResults = new FormData(quizForm);

    for(let value of formResults.values()) {
        if(value === correctAnswers[index]){
            score = score + 1;
        }
        index = index +1;
    }
    showMessage("Your Score is: " + score);
}

submitButton.addEventListener('click', submitButtonHandler)