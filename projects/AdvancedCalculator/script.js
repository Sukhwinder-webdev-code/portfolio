let displayArea = "";//variable to show data in the input field;
let currentInput = "";
let operator = "";
let result = null;

function pressNumber(num) {
    displayArea += num;
    currentInput += num;
    document.getElementById('displayData').value = displayArea;

}
function pressOperator(op) {
    if (currentInput !== "") {
        if (result === null) {
            result = parseFloat(currentInput);
        }
        else {
            calculate();
        }
    }
    operator = op;
    currentInput = "";
    displayArea += op;
    document.getElementById('displayData').value = displayArea;
}
function pressEquals() {
    if (currentInput !== "") {
        calculate();
    }
    document.getElementById('displayData').value = result;

    displayArea = result.toString();
    currentInput = "";
    operator = "";
}
function calculate() {

    let num = parseFloat(currentInput);
    if (operator === "+") result += num;
    if (operator === "-") result -= num;
    if (operator === "*") result *= num;
    if (operator === "/") result /= num;
    if (operator === "%") result %= num;
}
function clearAll() {
    displayArea = "";
    currentInput = "";
    operator = "";
    result = null;
    document.getElementById('displayData').value = "";
}
function clearLast() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        displayArea = displayArea.slice(0, -1);
        document.getElementById('displayData').value = displayArea;

    }
}

function changeSign() {

    if (currentInput !== "") {

        currentInput = (parseFloat(currentInput) * -1).toString();

        displayArea = displayArea.slice(0, -currentInput.length) + currentInput;

        document.getElementById('displayData').value = displayArea;

    }

}
