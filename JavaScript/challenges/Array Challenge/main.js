//   ---------------Challenge 7-----------------------

// /*
//     Array Challenge
// */

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// // Write Code Here
let elememtPlus;
elememtPlus = my.pop();
elememtPlus = my.pop();
my.reverse();

console.log(my.slice(0,my.length - 3))

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(my.slice(zero,counter).splice(my.length - counter)); // ["Elham", "Mazero"]
my.splice(zero,zero,"Elzero")

console.log(my[zero]); // "Elzero"

console.log(my[0][4] + my[0][5].toUpperCase()); // "rO"