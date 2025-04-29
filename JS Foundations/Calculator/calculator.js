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
      if (operandTwo === 0) {
        resultArea.innerHTML = "Cannot divide by zero";
        return "Error";
      }
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
const decimalBtn = document.querySelector("#decimalBtn");

// Number value from buttons & operandTwo+One separation
numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const numberValue = button.textContent;
    if (isOperatorClicked()) {
      operandTwo += numberValue;
      console.log(`Operand Two: ${operandTwo}`);
    } else {
      operandOne += numberValue;
      console.log(`Operand One: ${operandOne}`);
    }
    resultArea.innerHTML += numberValue;
  });
});

// Decimal value & appending to operand values
decimalBtn.onclick = function () {
  const decimalValue = decimalBtn.textContent;
  if (isOperatorClicked()) {
    if (!operandTwo.includes(".")) {
      operandTwo += ".";
      resultArea.innerHTML += decimalValue;
    }
  } else {
    if (!operandOne.includes(".")) {
      operandOne += ".";
      resultArea.innerHTML += decimalValue;
    }
  }
};

// Operator button & disabling when pressed
operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const operatorValue = button.textContent;
    resultArea.innerHTML += operatorValue;
    operator = operatorValue;

    operatorBtns.forEach((opBtn) => (opBtn.disabled = true));
  });
});

equalBtn.onclick = function () {
  if (operandOne && operator && operandTwo) {
    let result = operate(
      parseFloat(operandOne),
      operator,
      parseFloat(operandTwo)
    );

    if (result === "Error") return;

    result = Math.round((result + Number.EPSILON) * 100) / 100;
    resultArea.innerHTML = result;

    console.log(operandOne, operator, operandTwo);
    console.log(result);

    operandOne = result.toString();
    operandTwo = "";
    operator = "";

    operatorBtns.forEach((opBtn) => (opBtn.disabled = false));
  }
};

clearBtn.onclick = function () {
  resultArea.innerHTML = "&nbsp;";
  operandOne = "";
  operandTwo = "";
  operator = "";
  operatorBtns.forEach((opBtn) => (opBtn.disabled = false));
};

const isOperatorClicked = () => operator !== "";
