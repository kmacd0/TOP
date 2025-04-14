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

// Exercise 04 - Write a function removeFromArray which takes an array and args, and removes the args

function removeFromArray(array, item) {
  let newArray = [...array];
  const index = newArray.findIndex((element) => element === item);
  if (index !== -1) {
    newArray.splice(index, 1);
    return newArray;
  }
}

console.log(removeFromArray([1, 2, 3, 4, 5, 6], 3));
