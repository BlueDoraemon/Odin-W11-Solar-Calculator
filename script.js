//VARIABLES

let display = 0;

let result = '';

let operator = "";

let operand = ``;

let clickedOperator = false;


//FUNCTIONS

function add(a,b) {
    return +a + +b;

} ;

function subtract(a,b) {
    return a - b;
};

function multiply(a,b) {
    return a * b;
};

function divide(a,b) {
    return a / b;

};



function clearCE() {
    operand = '';
    display = 0;//clear CE
    console.log(display);
};

function rounding(num) {
    if (isNaN(num)) {
      return num;
    }
    const decimals = num.toString().split(".")[1];
    if (decimals && decimals.length > 6) {
      num = num.toFixed(6);
    }
    return num;
};

function ONC(){
    display = 0;

    result = '';
    
    operator = "";
    
    operand = ``;
};

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
        if (operatorClickedBefore) {
            operator = e.getAttribute('data-key');
        }
        else {
            (result != '') ? (operand === '') ? null : display = result = operate(result,operator,operand) : null;
            operator = e.getAttribute('data-key');
            console.log(operator);
      
            displayNumber(display);
            result = display;
            clearCE();
            operatorClickedBefore = true;
        }

        
    });
});
//Operands click

const operands = document.querySelectorAll('.operand');

operands.forEach((e)=>{
    e.addEventListener('click', ()=>{
        const key = e.getAttribute('data-key');
        if (key === `0`&& operand === `0`) {
          
        }
        else if (operand < 999999.9 && operand > -9999999){
            display = operand = `${operand}${key}`;
            console.log(display);
            displayNumber(display);
            operatorClickedBefore = false;
        }

    })
})

//Equals click

const equals = document.querySelector('#equals');

equals.addEventListener('click',()=>{
    (operand === '') ? null : display = result = operate(result,operator,operand);
    (result < 9999999 && result > -9999999) ? displayNumber(display) : null;
    console.log(result);    
    operatorClickedBefore = true;
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

// .decimal click

const dot = document.querySelector(`#decimal`);

operand.includes('.') ? null : dot.addEventListener('click', ()=>{
        operand = operand + `.`;
        displayNumber(operand);
    });
//sqrt click

const sqrtB = document.querySelector('#sqrt');

sqrtB.addEventListener('click', ()=>{
        (operand >= 0 ) ? operand = Math.sqrt(operand) : null;
        console.log(display);
        displayNumber(operand);
    });

//Github link click

const gitlink = document.querySelector('#GIT');

gitlink.addEventListener("click", ()=>{
    window.open('https://github.com/BlueDoraemon/', '_blank');
});

//DISPLAY

function displayNumber(number){
    const a = document.querySelector('.display');
    number = rounding(number);
    console.log(number);
    a.textContent = `${number}`;
};


//RUNNING TASKs


