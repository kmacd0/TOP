// Exercise 02 -  Write a function repeatString that repeats the string a given number of times

function repeatString(userString, repetitions) {
  let result = "";
  for (i = 0; i < repetitions; i++) {
    result += userString;
  }
  return result;
}

// console.log(repeatString("redX", 6));

// Exercise 03 - Write a function reverseString that reverses the string

function reverseString(str) {
  let myArray = str.split("");
  // console.log(myArray);

  myArray.reverse();

  let reversedString = myArray.join("");
  return reversedString;
}

// console.log(reverseString("hello"));

/** Exercise 04 - Write a function removeFromArray which takes an array and other arguments
 * then remove the other arguments from that array
 */

function removeFromArray(array, item) {
  let newArray = [...array];
  const index = newArray.findIndex(function (element) {
    console.log(element);
    return element === item;
  });
  if (index !== -1) {
    newArray.splice(index, 1);
    return newArray;
  }
}

// console.log(removeFromArray([1, 2, 3, 4, 5, 6], 3));

/** Exercise 05 - Write a function sumAll which takes 2 positive integers and returns the sum of
 * every integer between (and including) them
 */

function sumAll(num1, num2) {
  let steps = [];
  for (i = num1; i <= num2; i++) {
    steps.push(i);
  }
  steps = steps.reduce((a, b) => a + b, 0);
  return steps;
}

// console.log(sumAll(1, 8));

/** Exercise 06 - Create a function determineLeapYear to determine if a year is a leap year or not
 *  Leap years = divisible by 4, and not divisible by 100, unless divisible by 400
 */

function determineLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}

// console.log(determineLeapYear(2000));
// console.log(determineLeapYear(1985));
// console.log(determineLeapYear(1600));

// Exercise 07 - Create two functions to convert to Fahrenheit/Celsius, vice versa, rounded to 1 decimal

function fahrenheitToCelsius(fTemp) {
  celsiusTemp = (fTemp - 32) / (9 / 5);
  roundedCelsiusTemp = Math.round(celsiusTemp * 10) / 10;
  return roundedCelsiusTemp;
}

function celsiusToFahrenheit(cTemp) {
  fahrenheitTemp = (cTemp * 9) / 5 + 32;
  roundedFahrenheitTemp = Math.round(fahrenheitTemp * 10) / 10;
  return roundedFahrenheitTemp;
}

// console.log(fahrenheitToCelsius(64)); // Should return 17.8
// console.log(celsiusToFahrenheit(17)); // Should return 62.6
