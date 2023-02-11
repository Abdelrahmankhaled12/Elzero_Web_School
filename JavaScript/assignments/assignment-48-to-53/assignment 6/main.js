let start = 0;
let swappedName = "elZerO";

swappedName = swappedName.split("");

for(let i = start ; i < swappedName.length ; i++) {
    if(swappedName[i] === swappedName[i].toUpperCase()){
        swappedName[i] = swappedName[i].toLowerCase();
    }else {
        swappedName[i] = swappedName[i].toUpperCase();
    }
}
swappedName = swappedName.join("");
console.log(swappedName)

// // Output
// "ELzERo"
