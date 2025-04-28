let firstNum = 0;
let operator = "";
let secondNum = 0;

function operate(firstNum, operator, secondNum) {
  switch (operator) {
    case "+":
      return addNums(firstNum, secondNum);
    case "-":
      return subtractNums(firstNum, secondNum);
    case "*":
      return multiplyNums(firstNum, secondNum);
    case "/":
      return divideNums(firstNum, secondNum);
  }
}

const addNums = (a, b) => a + b;
const subtractNums = (a, b) => a - b;
const multiplyNums = (a, b) => a * b;
const divideNums = (a, b) => a / b;

const numberBtns = document.querySelectorAll(".number");
const operandBtns = document.querySelectorAll(".operand");

numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;
    console.log(buttonValue);
  });
});

operandBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const operandValue = button.textContent;
    console.log(operandValue);
  });
});

// function to add the same onclick to every button
// onclick equals the value of the button
// once an operand button is clicked, store the first value as firstNum
// and start the secondNum
