let operandOne = "";
let operandTwo = "";
let operator = "";

function operate(operandOne, operator, operandTwo) {
  switch (operator) {
    case "+":
      return addNums(operandOne, operandTwo);
    case "-":
      return subtractNums(operandOne, operandTwo);
    case "*":
      return multiplyNums(operandOne, operandTwo);
    case "/":
      return divideNums(operandOne, operandTwo);
    default:
      return "Error";
  }
}

const addNums = (a, b) => a + b;
const subtractNums = (a, b) => a - b;
const multiplyNums = (a, b) => a * b;
const divideNums = (a, b) => a / b;

const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const resultArea = document.querySelector(".result");
const equalBtn = document.querySelector("#equalBtn");
const clearBtn = document.querySelector("#clearBtn");

numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;
    if (isOperatorClicked()) {
      operandTwo += buttonValue;
    } else {
      operandOne += buttonValue;
    }
    resultArea.innerHTML += buttonValue;
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const operatorValue = button.textContent;
    resultArea.innerHTML += operatorValue;
    operator = operatorValue;
  });
});

equalBtn.onclick = function () {
  if (operandOne && operator && operandTwo) {
    let result = operate(
      parseFloat(operandOne),
      operator,
      parseFloat(operandTwo)
    );
    resultArea.innerHTML = result;
    console.log(result);
    console.log(operandOne, operator, operandTwo);

    operandOne = result.toString();
    operandTwo = "";
    operator = "";
  }
};

clearBtn.onclick = function () {
  resultArea.innerHTML = "";
  operandOne = "";
  operandTwo = "";
  operator = "";
};

const isOperatorClicked = () => operator !== "";

// update for decimals
