/**
 * Exercise 08 - Create a calculator which does the following:
 * add, subtract, gets sum, multiply, get the power, and find the factorial
 */

const addNum = (a, b) => a + b;

console.log(`Addition of numbers (2,4): ${addNum(2, 4)}`);

const subtractNum = (a, b) => {
  return a - b;
};

console.log(`Subtraction of numbers (2,4): ${subtractNum(2, 4)}`);

const getSum = (array) => {
  return array.reduce((a, b) => a + b, 0);
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
  const array = [];
  for (let i = 1; i <= num; i++) {
    array.push(i);
  }
  const raisedToPower = array.reduce((acc, v) => acc * v, 1);
  return raisedToPower;
};

console.log(`Factorial of number (6): ${getFactorial(6)}`);

/**
 * Exercise 09 - Create a function to determine if a string is a palindrome
 * (A string which is spelled the same both forwards and backwards)
 */

function isPalindrome(str) {
  let formatString = str.replace(/ /g, "").toLowerCase();
  let reversedString = [...formatString].reverse().join("");
  console.log(reversedString);

  if (reversedString === formatString) {
    return `Standard: ${formatString}\nReversed: ${reversedString}\n${str} is a palindrome.`;
  } else {
    return `Standard: ${formatString}\nReversed: ${reversedString}\n${str} is not a palindrome.`;
  }
}
console.log(isPalindrome("swag"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("Lid off a daffodil"));

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

const books = [
  {
    title: "Book",
    author: "John",
  },
  {
    title: "Book2",
    author: "Schlawg",
  },
];

const getBookTitles = () => books.map((item) => item.title);
console.log(getBookTitles(books));

/**
 * Exercise 12 - Given an array of objects representing people with a birth and death year,
 * return the oldest person. Return the whole person object. Many solutions such as reduce.
 * Create a check for people with no death date to get their age as of today.
 */

const people = [
  {
    name: "John",
    birthYear: "1942",
    deathYear: "1970",
  },
  {
    name: "Elizabeth",
    birthYear: "1962",
    deathYear: "2011",
  },
  {
    name: "Lane",
    birthYear: "2001",
  },
];

function getAge(birthYear, deathYear = new Date().getFullYear()) {
  return deathYear - birthYear;
}

function getOldestPerson(people) {
  return people.reduce((oldest, person) => {
    const currentAge = getAge(person.birthYear, person.deathYear);
    const oldestAge = getAge(oldest.birthYear, oldest.deathYear);

    if (currentAge > oldestAge) {
      return person;
    } else {
      return oldest;
    }
  }, people[0]);
}

console.log(getOldestPerson(people));
// John = 28
// Elizabth = 49
// Lane = 24
