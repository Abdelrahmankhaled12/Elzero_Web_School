let start = 10;
let end = 100;
let exclude = 40;


for(let i = start ; i<= end ; i+=10) {
    if(i != exclude) {
        console.log(i)
    }
}

// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

// let start = 10;
// let end = 0;
// let stop = 3;

// for(let i = start ; i>=end ; i--) {
//     if(i == stop) {
//         console.log(`${end}${i}`)
//         break;
//     }else if(i == start) {
//         console.log(i)
//     }else {
//         console.log(`${end}${i}`)
//     }
// }

// // Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03



// let start = 1;
// let end = 6;
// let breaker = 2;


// for(let i = start ; i<=end ; i++) {
//     console.log(i);
//     console.log(`-- ${breaker}`);
//     console.log(`-- ${breaker * breaker}`);
// }

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4


// let index = 10;
// let jump = 2;
// let end = 0;

// for (;;) {
//   // Write Your Code Here
//     console.log(index);
//     index -=jump;
//     if(index == jump) {
//         break;
//     }
// }

// Output
// 10
// 8
// 6
// 4

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// for(let i = 0 , j=1 ; i < friends.length ; i++) {
//     if(friends[i].includes(letter.toUpperCase())) {
//         continue;
//     }else {
//         console.log(`"${j} => ${friends[i]}"`)
//         j++;
//     }
// }

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"



// let start = 0;
// let swappedName = "elZerO";

// swappedName = swappedName.split("");

// for(let i = start ; i < swappedName.length ; i++) {
//     if(swappedName[i] === swappedName[i].toUpperCase()){
//         swappedName[i] = swappedName[i].toLowerCase();
//     }else {
//         swappedName[i] = swappedName[i].toUpperCase();
//     }
// }
// swappedName = swappedName.join("");
// console.log(swappedName)

// // Output
// "ELzERo"




// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// for(let i = ++start ; i<mix.length ; i++) {
//     if(typeof mix[i] === "number"){
//         console.log(mix[i])
//     }else {
//         continue;
//     }
// }

// // Output
// 2
// 3
// 4