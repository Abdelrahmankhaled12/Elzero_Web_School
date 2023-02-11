
//   ---------------Challenge 9-----------------------
/*
    Function - Random Argument Challenge
    ====================================
    Create Function showDetails
    Function Accept 3 Parameters [a, b, c]
    Data Types For Info Is
    - String => Name
    - Number => Age
    - Boolean => Status
    Argument Is Random
    Data Is Not Sorted Output Depend On Data Types
    - Use Ternary Conditional Operator
*/


function showDetails(...data) {
    let name, age, boolean;
    for(let i = 0;i < data.length ;i++) {
        typeof data[i] === "string" ? name = data[i]  : typeof data[i] === "number" ? age = data[i] : boolean = data[i];
}
document.write(`Hello ${name}, Your Age Is ${age}, ${boolean === true ?"You Are Available For Hire":"You Are Not Available For Hire"} `)
document.write(`<br>`)
}



showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"