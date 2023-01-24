let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for(let i = 0 , j=1 ; i < friends.length ; i++) {
    if(friends[i].includes(letter.toUpperCase())) {
        continue;
    }else {
        console.log(`"${j} => ${friends[i]}"`)
        j++;
    }
}

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"