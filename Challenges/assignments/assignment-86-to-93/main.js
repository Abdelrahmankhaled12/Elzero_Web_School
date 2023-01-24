// console.log(document.querySelector("div"));
// console.log(document.querySelector("#elzero"));
// console.log(document.querySelector(".element"));
// console.log(document.querySelector("[name=js]"));

// console.log(document.querySelectorAll("div")[0])
// console.log(document.querySelectorAll("#elzero")[0])
// console.log(document.querySelectorAll(".element")[0])
// console.log(document.querySelectorAll("[name=js]")[0])

// console.log(document.getElementById("elzero"));
// console.log(document.getElementsByClassName("element")[0]);
// console.log(document.getElementsByTagName("div")[0]);
// console.log(document.getElementsByName("js")[0]);

// console.log(document.body.firstElementChild)
// console.log(document.body.children[0])

// // challenge 1

// let setOfNumbers = new Set([10]);

// setOfNumbers.add(20).add(setOfNumbers.size);

// console.log(setOfNumbers);

// console.log([...setOfNumbers][setOfNumbers.size - 1])

// // Needed Output
// // Set(3) {10, 20, 2}
// // 2

// //=========================================
// //=========================================
// console.log("====================================");
// console.log("====================================");
// //=========================================
// //=========================================

// // challenge 2

// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// console.log(Array.from(new Set(myFriends)))

// // Needed Output
// // (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

// //=========================================
// //=========================================
// console.log("====================================");
// console.log("====================================");
// //=========================================
// //=========================================

// // challenge 3

//   let myInfo = {
//       username: "Osama",
//       role: "Admin",
//       country: "Egypt",
//     };

//     let myInfoMap = new Map([
//       ["username","Osama"],
//       ["role","Admin"],
//       ["country","Egypt"],
//     ]);

//     console.log(myInfoMap);
//     console.log(myInfoMap.size);
//     console.log(myInfoMap.has("role"))

//   // Needed Output
// //   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// //   3
// //   true

// //=========================================
// //=========================================
// console.log("====================================");
// console.log("====================================");
// //=========================================
// //=========================================

// // challenge 4

// let theNumber = 100020003000;

// console.log(+[...new Set([...theNumber.toString()])].map((e)=> e >= +true ? +e : "").join(""))

// // Needed Output
// // 123

// //=========================================
// //=========================================
// console.log("====================================");
// console.log("====================================");
// //=========================================
// //=========================================

// // challenge 5

// let theName = "Elzero";

// // method 1
// console.log(Array.from(theName));

// // method 2
// console.log([...theName]);

// // method 3
// console.log(theName.split(""));

// // method 4
// console.log([...new Set(theName)]);

// // method 5
// console.log()

// // Needed Output
// // ['E', 'l', 'z', 'e', 'r', 'o']

// //=========================================
// //=========================================
// console.log("====================================");
// console.log("====================================");
// //=========================================
// //=========================================

// // challenge 6

// //=========================================
// //=========================================
// console.log("====================================");
// console.log("====================================");
// //=========================================
// //=========================================

// // challenge 7

// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];

// console.log([...numsOne,...numsTwo]);
// console.log(numsOne.concat(numsTwo));
// console.log(Array.from(new Set([...numsOne,...numsTwo])));
// // Needed Output
// // [1, 2, 3, 4, 5, 6]

// //=========================================
// //=========================================
// console.log("====================================");
// console.log("====================================");
// //=========================================
// //=========================================

// // challenge 8

// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];

// console.log([...n1,...n2].length * Math.max(...n1)); // 210

// // Needed Output
// // 210









