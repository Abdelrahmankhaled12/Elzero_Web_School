
//   ---------------Challenge 6-----------------------

let job = "Manager";
let salary = 0;

switch (job) {
    case "Manager":
        salary = 8000;
        console.log(`salary = ${salary}`);
        break;
    case "IT":
    case "Support":
        salary = 6000;
        console.log(`salary = ${salary}`);
        break;
    case "Developer":
    case "Designer":
        salary = 7000;
        console.log(`salary = ${salary}`);
        break;
    default:
        salary = 4000;
        console.log(`salary = ${salary}`);
}

// /*
//     If Challenge
// */

let holidays = 2;
let money = 0;


if( holidays == 0) {
    money = 5000;
    console.log(`My Money is ${money}`);
}else if( holidays == 1 || holidays == 2){
    money = 3000;
    console.log(`My Money is ${money}`);
}else if(holidays == 4) {
    money = 1000;
    console.log(`My Money is ${money}`);
}else if(holidays == 5){
    money = 100;
    console.log(`My Money is ${money}`);
} else {
    money = 0;
    console.log(`My Money is ${money}`);
}

