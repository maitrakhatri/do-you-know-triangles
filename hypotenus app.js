var input1 = document.querySelector("#input-1")
var input2 = document.querySelector("#input-2")
var checkButton = document.querySelector("#checkbutton")
var result = document.querySelector("#result")

function showMessage(message) {
    result.style.display = "block";
    result.innerText = message;
}

function hypoCal(input1, input2) {
    var value1 = Number(input1.value);
    var value2 =  Number(input2.value);
    var sum = Math.pow(value1, 2) + Math.pow(value2,2);
    // console.log(sum)
    var hypo = Math.sqrt(sum);
    // console.log(hypo);
    return hypo;
}

checkButton.addEventListener("click", function clickHandler() {

    result.style.display = "none";

    if (input1.value == "" || input2.value == "" || input1.value < 0 || input2.value < 0) {
        showMessage("Please enter all Positive values");
        
    }
    else {
        var hypo = hypoCal(input1, input2);
        showMessage("The length of Hypotenues is " + hypo + "cm")
    }

    

});





