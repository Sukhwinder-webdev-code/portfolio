let value1;
let value2;
let result = null;
let check = "";

function calculate(operation) {
    value1 = document.querySelector('#input1').value;
    value2 = document.querySelector('#input2').value;
    value1 = parseFloat(value1);
    value2 = parseFloat(value2);
    check = operation;
    if (isNaN(value1) || isNaN(value2)) {
        document.querySelector('#resultDisplay').textContent = "Enter valid numbers!";
    }
    else {
        switch (check) {
            case 'ADD':
                result = `${value1} + ${value2} ${'='} ${value1 + value2}`;
                break;
            case 'SUBTRACT':
                result = `${value1} - ${value2} ${'='} ${value1 - value2}`;
                break;
            case 'MULTIPLY':
                result = `${value1} * ${value2} ${'='} ${value1 * value2}`;
                break;
            case 'DIVIDE':
                if (value2 === 0) {
                    result = "division by Zero is not allowed!";
                    document.querySelector('#resultDisplay').innerText = result;
                }
                else {
                    result = `${value1} / ${value2} ${'='} ${value1 / value2}`;
                }

        }
        document.querySelector('#resultDisplay').innerText = result;

    }

}
function clearAll() {
    value1 = "";
    value2 = "";
    result = null;
    document.querySelector('#input1').value = value1;
    document.querySelector('#input2').value = value1;
    document.querySelector('#resultDisplay').textContent = result;
}
