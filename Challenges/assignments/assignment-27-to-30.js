let userName = "Elzero";
console.log(userName[3].toLowerCase()); // e
console.log(userName.split("")[3].toLowerCase()); // e
console.log(userName.slice(3,4).toLowerCase()); // e
console.log(userName.substr(3,1).toLowerCase()); // e
console.log(userName.substring(3,4).toLowerCase()); // e
console.log(userName.charAt(3).repeat(3).toLowerCase()); // eee








let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True