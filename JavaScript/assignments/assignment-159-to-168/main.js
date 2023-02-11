// challenge 1

let myBirthDay = new Date("6/19/2003");

myBirthDay = new Date() - myBirthDay;

let seconds = Math.floor(myBirthDay / 1000);

let minutes = Math.floor(myBirthDay / 1000 / 60);

let hours = Math.floor(myBirthDay / 1000 / 60 / 60);

let days = Math.floor(myBirthDay / 1000 / 60 / 60 / 24);

let months = Math.floor(myBirthDay / 1000 / 60 / 60 / 24 / 30);

let years = Math.floor(myBirthDay / 1000 / 60 / 60 / 24 / 365);


console.log(seconds + " Seconds");
console.log(minutes + " Minutes");
console.log(hours + " Hours");
console.log(days + " Days");
console.log(months + " Months");
console.log(years + " Years");

// ================================================
// ================================================
console.log("=".repeat(30));
console.log("=".repeat(30));
// ================================================
// ================================================

// challenge 2



let date = new Date(0);
date.setFullYear(date.getFullYear() + 10);
date.setHours(0, 0, 0, 1000);
console.log(date)



// Needed Output

// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

// ================================================
// ================================================
console.log("=".repeat(30));
console.log("=".repeat(30));
// ================================================
// ================================================

// challenge 3



let date1 = new Date();

let monthsString = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

date1.setDate(0)

console.log(date1);
console.log(`Previous Month Is ${monthsString[date1.getMonth()]} And Last Day Is ${date1.getDate()}`)

// Needed Output

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"


// ================================================
// ================================================
console.log("=".repeat(30));
console.log("=".repeat(30));
// ================================================
// ================================================

// challenge 4


let dateBirthDay1 = new Date("6/19/2003");
let dateBirthDay2 = new Date(2003, 6, 19);
let dateBirthDay3 = new Date("2003-06-19T00:00:00Z");

console.log(dateBirthDay1);
console.log(dateBirthDay2);
console.log(dateBirthDay3);



// ================================================
// ================================================
console.log("=".repeat(30));
console.log("=".repeat(30));
// ================================================
// ================================================

// challenge 5

let start = performance.now();

for(let i = 0 ; i <= 99999;i++) {
    console.log(i);
}
let end = performance.now();
console.log(`Loop Took ${Math.floor(end - start)} Milliseconds.`);


// ================================================
// ================================================
console.log("=".repeat(30));
console.log("=".repeat(30));
// ================================================
// ================================================

// challenge 6



// Write Your Generator Function Here

function* gen() {
    let index = 14;
    let i = 0;
    while(true) {
        index = index + 140 + i;
        i = i +200;
        yield index;
    }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}


// ================================================
// ================================================
console.log("=".repeat(30));
console.log("=".repeat(30));
// ================================================
// ================================================

// challenge 7


function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here

function* genAll() {
    yield* new Set(genNumbers());
    yield* new Set(genLetters());
}

let generator1 = genAll();

console.log(generator1.next()); // {value: 1, done: false}
console.log(generator1.next()); // {value: 2, done: false}
console.log(generator1.next()); // {value: 3, done: false}
console.log(generator1.next()); // {value: 4, done: false}
console.log(generator1.next()); // {value: 5, done: false}
console.log(generator1.next()); // {value: "A", done: false}
console.log(generator1.next()); // {value: "B", done: false}
console.log(generator1.next()); // {value: "C", done: false}
console.log(generator1.next()); // {value: "D", done: false}




// ================================================
// ================================================
console.log("=".repeat(30));
console.log("=".repeat(30));
// ================================================
// ================================================

// challenge 8



import calc, * as modOne from "./main2.js";


console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60













