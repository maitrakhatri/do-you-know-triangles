var input1 = document.querySelector("#input-1")
var input2 = document.querySelector("#input-2")
var input3 = document.querySelector("#input-3")
var check = document.querySelector("#checkbutton")
var result = document.querySelector("#result")

function showMessage(message) {
    result.style.display = "block";
    result.innerText = message;
}

function checkSum(input1, input2, input3) {
    sum = Number(input1.value) + Number(input2.value) + Number(input3.value);

    return sum;
}

function triangleChecker(sum) {
    if (sum === 180) {
        showMessage("This triangle is Possible !!");
    } 
    else {
        showMessage("This triangle is NOT Possible :(");
    }
}

check.addEventListener("click", function checkTriangle(){

    result.style.display = "none";

    sum = checkSum(input1, input2, input3);
    
    console.log(sum);

    if (input1.value == "" || input2.value == "" || input3.value == "" || input1.value < 0 || input2.value < 0 || input3.value < 0) {
        showMessage("Enter all the Positive values");
    } 
    else {
        triangleChecker(sum);
    }
})