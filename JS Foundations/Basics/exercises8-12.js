/**
 * Exercise 08 - Create a calculator which does the following:
 * add, subtract, gets sum, multiply, get the power, and find the factorial
 */

const addNum = (a, b) => {
  return a + b;
};

console.log(`Addition of numbers (2,4): ${addNum(2, 4)}`);

const subtractNum = (a, b) => {
  return a - b;
};

console.log(`Subtraction of numbers (2,4): ${subtractNum(2, 4)}`);

const getSum = (array) => {
  return (result = array.reduce((a, b) => a + b, 0));
};

console.log(`Sum of array [1, 2, 3, 4, 5, 6]: ${getSum([1, 2, 3, 4, 5, 6])}`);

// or just use Math.pow
const getPower = (num, power) => {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= num;
    // console.log(result);
  }
  return result;
};

console.log(`Power of number (2^8): ${getPower(2, 8)}`);

const getFactorial = (num) => {
  let array = [];
  for (let i = 1; i <= num; i++) {
    array.push(i);
  }
  array = array.reduce((a, b) => a * b, 1);
  return array;
};

console.log(`Factorial of number (6): ${getFactorial(6)}`);

/**
 * Exercise 09 - Create a function to determine if a string is a palindrome
 * (A string which is spelled the same both forwards and backwards)
 */

/**
 * Exercise 10 - Create a function to return a specific member of Fibonacci sequence
 * (A series of numbers in which each number is the sum of the two preceding ones).
 * Fibonacci(4) would return the 4th member of series: 3 out of (1, 1, 2, 3)
 */

/**
 * Exercise 11 - Given an array of objects, representing book titles and authors,
 * Create a function which takes the array and returns an array of titles
 * getTheTitles(books) // ['Book1', 'Book2']
 * Hint: built-in javascript method will do most of the work
 */

/**
 * Exercise 12 - Given an array of objects representing people with a birth and death year,
 * return the oldest person. Return the whole person object. Many solutions such as reduce.
 */
