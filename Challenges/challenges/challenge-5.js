//   ---------------Challenge 5-----------------------

let a = 10;


a < 10 ? console.log(10) : a >= 10 && a <= 40 ? console.log("10 To 40") : a > 40 ? console.log("> 40") : console.log("Unknown");

// // Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

if(st.repeat(2).length.toFixed() == "34") {
    console.log("Good");
}

// // W Position May Change

if (st.toLowerCase().charAt(st.toLowerCase().indexOf("w")) === "w") {
    console.log("Good");
}

if ( st !== "string") {
    console.log("Good");
}

if ( typeof st === typeof "number") {
    console.log("Good");
}


if ( st.substr(0,6).repeat(2)=== "ElzeroElzero") {
    console.log("Good");
}
