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

console.log(sumAll(1, 8));
