let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
// Method 2

console.log(myFriends.slice(-num)); // ["Ahmed", "Elham", "Osama"];





// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// // Write Your Code Here
// friends.pop();
// friends.shift();
// console.log(friends); // ["Eman", "Osama"]




let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrTwo.pop(),arrOne.reverse(),arrTwo.reverse())); // ["Z", "X", "D", "C", "B", "A"]





let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO




let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

haystack.includes(needle) ? console.log("found") : console.log("Not found");

haystack.indexOf(needle) === -1 ?  console.log("Not found"):console.log("found");

haystack.lastIndexOf(needle) === -1 ?  console.log("Not found"):console.log("found");




let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

console.log(allArrs.concat(arr2.pop(),arr1.pop(),arr2.slice(arr1.length)).reverse().join("").toLowerCase()); // fxy

