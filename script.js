function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b != 0){
        return a / b;
    }
    else{
        return "Error";
    }
}

function restart(){
  a = 0; 
  b = 0;
  displayValue = 0;
  numDiv.removeChild(firstNum);
  numDiv.removeChild(sign);
  numDiv.removeChild(secondNum);
}

function roundNumber(num, scale){ //rounding algorithm stolen from stackoverflow :)
  if(!("" + num).includes("e")) {
    return +(Math.round(num + "e+" + scale)  + "e-" + scale);
  } else {
    var arr = ("" + num).split("e");
    var sig = ""
    if(+arr[1] + scale > 0) {
      sig = "+";
    }
    return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
  }
}

//set second number, start calculation
function operate(){
  b = parseFloat(displayValue);
  secondNum.textContent = b;
  numDiv.appendChild(secondNum);


  switch(op){
    case ad:
      displayValue = parseFloat(add(a, b)).toFixed(2);
      break;
    case sub: 
      displayValue = parseFloat(subtract(a, b)).toFixed(2);
      break;
    case mult:
      displayValue = parseFloat(multiply(a, b)).toFixed(2);
      break;
    case div:
      displayValue = parseFloat(divide(a, b)).toFixed(2);
      break;
  }

  displayValue = roundNumber(displayValue, 2);

  mainDisplay.textContent = displayValue;
  //displayDiv.appendChild(mainDisplay);
}

function updateDisplay(e){
  if(displayValue == 0){
    displayValue = e.target.id;
  }
  else if(e.target.id == 'clear'){
    restart();
  }
  else{
    displayValue += e.target.id;
  }
  mainDisplay.textContent = displayValue;
}

//find operator value, set first number
function setOp(e){
  a = parseFloat(displayValue);
  firstNum.textContent = a;
  numDiv.appendChild(firstNum);
  displayValue = 0;
  op = e.target.id;
  sign.textContent = op;
  numDiv.appendChild(sign);

  if(b>0){
    secondNum.textContent = "";
  }
}

//initial values
let a = 0; 
let b = 0;
let displayValue = 0;

//operators
let op = "";
let ad = "+";
let sub = "-";
let mult = "*";
let div = "/";


//Event listeners
let number = document.getElementsByClassName("number");
let operand = document.getElementsByClassName("operand");
let clear = document.getElementById('clear');
let equals = document.getElementById('equal');
for (var i = 0 ; i < number.length; i++) {
  number[i].addEventListener('click' , updateDisplay, false);
}
for (var i = 0 ; i < operand.length; i++) {
  operand[i].addEventListener('click', setOp, false);
}
clear.addEventListener('click', updateDisplay, false);
equals.addEventListener('click', operate, false);


//DOM
let displayDiv = document.getElementById('displayVal');
let numDiv = document.getElementById('num');
let firstNum = document.createElement('span');
firstNum.id = 'firstNum';
let sign = document.createElement('span');
sign.id = 'sign';
let secondNum = document.createElement('span');
secondNum.id = 'secondNum';
let mainDisplay = document.createElement('span');
mainDisplay.textContent = displayValue;
displayDiv.appendChild(mainDisplay);