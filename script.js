function add(a,b) {
    return a + b;

} 

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;

}

function rounding(number) {
    return number.toFixed(8); //display how many decimal places
}

let display = "";

let result = 0;

let operator = "";

let operand = 0;

function operate(result,operator,operand) {
    switch(operator) {
        case "+": return add(result,operand); 
             break;
        case "-": return subtract(result,operand);
             break;
        case "*": return multiply(result,operand); 
            break;
        case "/": return divide(result,operand); 
            break;
        case "=": return result;
        default : display = `ERROR`;
    }
}

//test
console.log(operate(0,'+',5));

