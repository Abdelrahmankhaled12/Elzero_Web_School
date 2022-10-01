let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;



while(friends.length) {
    if( typeof friends[index] === "number" || friends[index][index] === "A") {
        friends.shift();
        continue;
    }else {
        counter++;
        console.log(`"${counter} => ${friends[index]}"`)
        friends.shift();
    }

}

// Output
// "1 => Sayed"
// "2 => Mahmoud"