//VARIABLES

let display = "";

let result = 0;

let operator = "";

let operand = ``;


//FUNCTIONS

function add(a,b) {
    return +a + +b;

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
    display = '';
    console.log(display);
}

function rounding(num) {
    if (isNaN(num)) {
      return num;
    }
    const decimals = num.toString().split(".")[1];
    if (decimals && decimals.length > 6) {
      num = num.toFixed(6);
    }
    return num;
}

function ONC(){
    display = "";

    result = 0;
    
    operator = "";
    
    operand = ``;
}

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



//EVENTS

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
        clearCE();
        operator = e.getAttribute('data-key');
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
    console.log(result);
});

//ON/C click

const onc = document.querySelector('#onc');

onc.addEventListener('click',()=>{
    ONC();
    displayNumber(display);
});

//clear ce click

const clear = document.querySelector('#clearce');

clear.addEventListener('click',()=>{
    clearCE();
    displayNumber(display);
});

//Github link click

const gitlink = document.querySelector('#GIT');

gitlink.addEventListener("click", (e)=>{
    window.open('https://github.com/BlueDoraemon/', '_blank');
});

//DISPLAY

function displayNumber(number){
    const a = document.querySelector('.display');
    //number = rounding(number);
    console.log(number);
    a.textContent = `${number}`;
};


//RUNNING TASKs


