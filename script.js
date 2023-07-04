let inputOne = "";
let inputTwo = "";
let myOperator = "";
let myAnswer;

const buttons = document.querySelectorAll("button");
const myInputOne = document.querySelector(".input-one");
const myInputTwo = document.querySelector(".input-two");

//Add event listener for all buttons
buttons.forEach((button) => {
    button.addEventListener("click", function () {
        console.log(this);
        findPath(this);
    });
});

//Do something different, depending on the button type.
function findPath(aButton) {
    if (aButton.classList.contains("num")) {
        updateInput(aButton.innerHTML);
    } else if (aButton.classList.contains("operator")) {
        updateOperator(aButton.innerHTML);
    } else if (aButton.classList.contains("decimal")) {
        manageDecimal(aButton.innerHTML);
    } else {
        clearInputs(aButton.innerHTML);
    }
}

//Get numbers to update the screen
function updateInput(value) {
    if (myOperator && inputTwo == "") {
        inputTwo = inputOne;
        myInputTwo.innerHTML = inputTwo + " " + myOperator;
        inputOne = value;
        myInputOne.innerHTML = inputOne;
    } else {
        inputOne = inputOne + value;
        console.log(value);
        myInputOne.innerHTML = inputOne;
    }
}

//Adds a decimal if there isn't one already
function manageDecimal(decimal) {
    if (inputOne.includes(".")) {
        return;
    } else {
        updateInput(decimal);
    }
}

//Does something depending on the operator
function updateOperator(anOperator) {
    switch (anOperator) {
        case "=":
            if (inputTwo.length > 0) {
                myAnswer = doMath(myOperator);
                console.log(myAnswer);
                clearInputs("button");
                updateInput(myAnswer);
                console.log(myAnswer);
                //Update inputTwo
                break;
            } else {
                break;
            }
        default:
            myOperator = anOperator;
            myInputOne.innerHTML = inputOne + " " + myOperator;
    }
}

//Updates myAnswer depending on the math.
function doMath(theOperator) {
    let num1 = Number(inputOne);
    let num2 = Number(inputTwo);
    switch (theOperator) {
        case "+":
            console.log(theOperator);
            return num1 + num2;
        case "-":
            console.log(num1-num2);
            return num1 - num2;
        case "x":
            return num1 * num2;

        case "÷":
            return num1 / num2;
        default:
            break;
    }
}

//Deletes data depending on the button pressed
function clearInputs(button) {
    if (button == "DEL" && myOperator == "") {
        inputOne = inputOne.slice(0, -1);
    } else if (button == "DEL" && myOperator !== "") {
        myOperator = "";
    } else {
        inputOne = "";
        inputTwo = "";
        myOperator = "";
        myInputTwo.innerHTML = inputTwo;
    }
    myInputOne.innerHTML = inputOne;
}
