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

console.log(addNums(2, 2));
console.log(subtractNums(4, 2));
console.log(multiplyNums(4, 8));
console.log(divideNums(10, 5));
