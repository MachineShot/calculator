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
}

function operate(){
  b = parseInt(displayValue);
  switch(op){
    case ad:
      answer = add(a, b);
      break;
    case sub: 
      answer = subtract(a, b);
      break;
    case mult:
      answer = multiply(a, b);
      break;
    case div:
      answer = divide(a, b);
      break;
  }

  alert(answer);
  restart();
}

function updateDisplay(e){
  if(displayValue == 0){
    displayValue = e.target.id;
  }
  else if(e.target.id == 'clear'){
    displayValue = 0;
    alert('Cleared');
  }
  else{
    displayValue += e.target.id;
  }
}

function setOp(e){
  a = parseInt(displayValue);
  displayValue = 0;
  op = e.target.id;
}

let a = 0; 
let b = 0;
let displayValue = 0;

let op = "";
let ad = "+";
let sub = "-";
let mult = "*";
let div = "/";

let number = document.getElementsByClassName("number");
let operand = document.getElementsByClassName("operand");
let clear = document.getElementById('clear');
let equals = document.getElementById('=');
for (var i = 0 ; i < number.length; i++) {
  number[i].addEventListener('click' , updateDisplay, false);
}
for (var i = 0 ; i < operand.length; i++) {
  operand[i].addEventListener('click', setOp, false);
}
clear.addEventListener('click', updateDisplay, false);
equals.addEventListener('click', operate, false);
