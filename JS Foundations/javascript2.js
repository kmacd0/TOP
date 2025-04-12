/**TOP
 *
 * Write a function called add7 that takes a number and returns it +1.
 *
 * Write a function called multiply that takes 2 numbers and returns their product.
 *
 * Write a function called capitalize which takes a string and returns it only with
 * the first letter capitalized.
 *
 * Write a function called lastLetter which takes a string and only returns the very
 * last letter of that string.
 */

/** function add7(a) {
  return a + 7;
}
*/

const add7 = (a) => a + 7;
console.log(add7(4));

/** function multiply(c, d) {
  return c * d;
}
*/

const multiply = (c, d) => c * d;
console.log(multiply(3, 7));

function capitalize(string) {
  return String(string).charAt(0).toUpperCase() + String(string).slice(1);
}

inputString = prompt("Enter a string to capitalize the first letter");
console.log(capitalize(inputString));

function lastLetter(str) {
  return str.charAt(str.length - 1);
}
inputStringLast = prompt("Enter a string to get its last character");
console.log(lastLetter(inputStringLast));
