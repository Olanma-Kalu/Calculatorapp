

let result = document.getElementById('result');
let equation = '';

function appendNumber(number) {
  equation = equation + number;
  result.textContent = equation;
}

function add() {
  equation += '+';
  result.textContent = equation;
}

function subtract() {
  equation += '-';
  result.textContent = equation;
}

function multiply() {
  equation += '*';
  result.textContent = equation;
}
 
function divide() {
  equation += '/';
  result.textContent = equation;
}

function calculate() {
  try {
    let answer = eval(equation);
    result.textContent = answer;
    equation = '';
  } catch (error) {
    result.textContent = 'Error';
    equation = '';
  }
}
function allClear() {
    equation = ''; 
    result.textContent = '0'; 
  }











