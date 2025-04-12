/**
 *
 * Write a function that gets a random person from an array of names.
 *
 * Write a function which returns the sum of two arguments.
 *
 */

const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];

function logRandomPerson() {
  const randomIndex = Math.floor(Math.random() * names.length);
  // ex .4 or .3 .2 multipled by 8
  console.log(names[randomIndex]);
}

function addSum(a, b) {
  return a + b;
}
console.log(addSum(2, 4));

// Can also write as
const addSumAs = (c, d) => c + d;
console.log(addSumAs(4, 6));

logRandomPerson();
