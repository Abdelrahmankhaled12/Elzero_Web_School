let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let arrayNew = mix.map((ele)=> {
    return typeof ele === "number" ? "" : ele ;
}).reduce((acc,ele)=>{
    return acc + ele;
})

console.log(arrayNew)

// Elzero

let myString = "EElllzzzzzzzeroo";

let x = myString.split("").filter((ele,index,arr)=> {
    return ele === arr[index + 1 ] ? "" : ele ;
}).reduce((acc,ele)=> {
    return acc + ele ;
})

console.log(x)

// Elzero

let myArray = ["E", "l", "z", ["e" , "r"], "o"];


let y = myArray.reduce((acc,ele)=> {
    return acc + ele;
}).split(",").join("");

console.log(y)


// Elzero

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let array = numsAndStrings.filter((ele)=> {
    return typeof ele === "number";
}).map((ele)=> {
return -ele ;
});

console.log(array)

// [-1, -10, 10, 20, -5, -3]


let nums = [2, 12, 11, 5, 10, 1, 99];

let num = nums.reduce((acc , currentElemant , currentIndex , array)=> {
 return currentElemant % 2 != 0 ? acc + currentElemant : acc * currentElemant ;
},1)

console.log(num)

// 500
