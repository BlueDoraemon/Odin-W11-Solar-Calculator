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

function clearCE() {
    operand = ''; //clear CE
}

function rounding(number) {
    return number.toFixed(8); //display how many decimal places
}

let display = "";

let result = 0;

let operator = "";

let operand = ``;

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
        
        default : display = `ERROR`;
    };
};

//test
console.log(operate(0,'+',5));


//Mouseover buttons
const buttonsOver = document.querySelectorAll(`.button`);

buttonsOver.forEach((e)=>{
    e.addEventListener('mouseover',() => {
         e.style.backgroundColor = '#bed6d8';
         e.style.cursor = "pointer";
    });
    e.addEventListener("mouseout", () => {
        e.style.backgroundColor = "#dde2e5";
        e.style.cursor = "default";
      });
});

//Operators click
const operators = document.querySelectorAll('.operator');

operators.forEach((e)=>{
    e.addEventListener('click',()=>{
        
        const key = e.getAttribute('data-key');
        operator = key;
        console.log(operator);
    });
});
//Operands click

const operands = document.querySelectorAll('.operand');

operands.forEach((e)=>{
    e.addEventListener('click', ()=>{
        const key = e.getAttribute('data-key');
        if (key === `0`&& operand === ``) {}
        else {
            operand = `${operand}${key}`;
            console.log(operand);
            displayNumber(operand);
        }

    })
})

//Equals click

const equals = document.querySelector('#equals');

equals.addEventListener('click',()=>{
    result = operate(result,operator,operand);
    displayNumber(result);
}
)
//Github link click

const gitlink = document.querySelector('#GIT');

gitlink.addEventListener("click", (e)=>{
    window.open('https://github.com/BlueDoraemon/', '_blank');
});

//DISPLAY

function displayNumber(number){
    const a = document.querySelector('.display');
    console.log(number);
    a.textContent = `${number}`;
}


