let start = 10;
let end = 0;
let stop = 3;

for(let i = start ; i>=end ; i--) {
    if(i == stop) {
        console.log(`${end}${i}`)
        break;
    }else if(i == start) {
        console.log(i)
    }else {
        console.log(`${end}${i}`)
    }
}

// // Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03
