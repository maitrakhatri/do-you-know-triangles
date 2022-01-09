const input1 = document.querySelector("#input-1")
const input2 = document.querySelector("#input-2")
const checkButton = document.querySelector("#checkbutton")
const result = document.querySelector("#result")

function showMessage(message) {
    result.style.display = "block";
    result.innerText = message;
}

const areaCal = (input1, input2) => area = 0.5*input1.value*input2.value

// function areaCal(input1, input2) {
//     var value1 = Number(input1.value);
//     var value2 =  Number(input2.value);
//     var product = value1 * value2;
//     // console.log(sum)
//     var area = 0.5*product;
//     // console.log(hypo);
//     return area;
// }

checkButton.addEventListener("click", () => {

    result.style.display = "none";

    if (input1.value == "" || input2.value == "" || input1.value < 0 || input2.value < 0) {
        showMessage("Please enter all Positive values");
        
    }
    else {
        var area = areaCal(input1, input2);
        showMessage(`The area of the triangle is ${area} cm^2`)
    }

    

});





