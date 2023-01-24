
//   ---------------Challenge 8-----------------------


// /*
//   Loop Challenge
// */

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];




let stop = myAdmins.indexOf("Stop");

document.write(`<div>We Have ${stop} Admins</div>`);
document.write(`<hr>`);
for(let i = 0 ; i< stop ; i++) {
    let count = 0;
    document.write(`The Admin For Team ${i + 1} is ${myAdmins[i]}`);
    document.write(`<h3>Team Members : </h3>`);
    for(let j = 0 ; j < myEmployees.length;j++) {
        if(myAdmins[i][0] === myEmployees[j][0]) {
            count++;
            document.write(`<p> - ${count} ${myEmployees[j]} </p>`)
        }
    }
    document.write(`<hr>`);
}
