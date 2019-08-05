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

function operate (op, a , b) {
    switch(op){
      case ad:
        return add(a, b);
        break;
      case sub: 
        return subtract(a, b);
        break;
      case mult:
        return multiply(a, b);
        break;
      case div:
        return divide(a, b);
        break;
    }
  }

  function updateDisplay(){ //doesnt work
    if(displayValue == "0"){
        displayValue == this.id;
    }
    else{
        displayValue += this.id;
    }
  }
  
  let ad = "+";
  let sub = "-";
  let mult = "*";
  let div = "/";

  let displayValue = "0"; //initial display is zero

  let number = document.getElementsByClassName("number");
  for (var i = 0 ; i < number.length; i++) {
    number[i].addEventListener('click' , updateDisplay(), false ) ; //doesnt work
 }