let operator;
let operatorSet = false;
let numOne = '';
let numOneSet = false;
let numTwo = '';
let operatorString = '';
let includePoint = false;

const bottomText = document.querySelector(".bottom-number");

function operate(){
    strToNumber();
    switch(operator){
        case "add":
            numOne = add(numOne,numTwo).toString();
            break;
        case "subtract":
            numOne = subtract(numOne,numTwo).toString();
            break;
        case "multiply":
            numOne = multiply(numOne,numTwo).toString();
            break;
        case "divide":
            numOne = divide(numOne,numTwo).toString();
            break;
    }
    numOne = Math.floor((numOne)*100)/100;
    console.log(`Calculation result: ${numOne}`);
    numTwo = '';
    operatorString = '';
    operatorSet = false;
    includePoint = false;
    display();
}

function display(){
    bottomText.textContent = `${numOne} ${operatorString} ${numTwo}`;
}

function strToNumber(){
    numOne = parseFloat(numOne);
    numTwo = parseFloat(numTwo);
}

function clickNum (num){
    if(numOneSet && !operatorSet) return;
    console.log(`Number clicked: ${num}`);
    if (!numOneSet){
        numOne += num;
    }else{
        numTwo += num;
    }
    
    display();
}

function clickPoint(){
    if(includePoint) return;
    if(!numOneSet && numOne.length > 0){
        numOne += '.';
    }else if(numTwo.length > 0){
        numTwo += '.';
    }
    includePoint = true;
    display();
}

function clear(){
    console.log("Clear button clicked");
    numOneSet = false;
    operatorSet = false;
    numOne = '';
    numTwo = '';
    operatorString = '';
    display();
}

function clickOperator(oper){
    if (operatorSet) return;
    if (numOne.length === 0) return;
    console.log(`Operater clicked: ${oper}`);
    if (!numOneSet) {
        numOneSet = true;
    }

    switch(oper){
        case "add":
            operatorString = " + ";
            break;
        case "subtract":
            operatorString = " - ";
            break;
        case "multiply":
            operatorString = " * ";
            break;
        case "divide":
            operatorString = " / ";
            break;
    }
    
    operator = oper;
    operatorSet = true;
    includePoint = false;
    display();  
}

function add(a,b) {
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

const zeroBtn = document.getElementById("zeroBtn");
zeroBtn.addEventListener('click', () => {
    clickNum(0);
})

const oneBtn = document.getElementById("oneBtn");
oneBtn.addEventListener('click', () => {
    clickNum(1);
})

const twoBtn = document.getElementById("twoBtn");
twoBtn.addEventListener('click', () => {
    clickNum(2);
})

const threeBtn = document.getElementById("threeBtn");
threeBtn.addEventListener('click', () => {
    clickNum(3);
})

const fourBtn = document.getElementById("fourBtn");
fourBtn.addEventListener('click', () => {
    clickNum(4);
})

const fiveBtn = document.getElementById("fiveBtn");
fiveBtn.addEventListener('click', () => {
    clickNum(5);
})

const sixBtn = document.getElementById("sixBtn");
sixBtn.addEventListener('click', () => {
    clickNum(6);
})

const sevenBtn = document.getElementById("sevenBtn");
sevenBtn.addEventListener('click', () => {
    clickNum(7);
})

const eightBtn = document.getElementById("eightBtn");
eightBtn.addEventListener('click', () => {
    clickNum(8);
})

const nineBtn = document.getElementById("nineBtn");
nineBtn.addEventListener('click', () => {
    clickNum(9);
})

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', () => {
    clickOperator("add");
})

const subtractBtn = document.getElementById("subtractBtn");
subtractBtn.addEventListener('click', () => {
    clickOperator("subtract");
})

const multiplyBtn = document.getElementById("multiplyBtn");
multiplyBtn.addEventListener('click', () => {
    clickOperator("multiply");
})

const divideBtn = document.getElementById("divideBtn");
divideBtn.addEventListener('click', () => {
    clickOperator("divide");
})

const equalBtn = document.getElementById("equalBtn");
equalBtn.addEventListener('click', () => {
    operate();
})

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener('click', () => {
    clear();
})

const pointBtn = document.getElementById("pointBtn");
pointBtn.addEventListener('click', () => {
    clickPoint(".");
})
