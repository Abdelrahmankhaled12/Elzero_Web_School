
// challenge 1 

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let rgIp = /\d{4}:\w{3}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/ig;

console.log(ip.match(rgIp));
console.log(rgIp.test(ip));
//=========================================
//=========================================
console.log("====================================");
console.log("====================================");
//=========================================
//=========================================
// challenge 2

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let rgSpecialNames = /os(\d+)?o/ig;

console.log(specialNames.match(rgSpecialNames));
// Output
// ['Os10O', 'OsO', 'Os100O']


//=========================================
//=========================================
console.log("====================================");
console.log("====================================");

//=========================================
//=========================================

// challenge 3

let phone = "+(995)-123 (4567)";

let rgPhone = /\+\(\d{3}\)-\d{3} \(\d{4}\)/ig;

console.log(rgPhone.test(phone));
console.log(phone.match(rgPhone));

//=========================================
//=========================================
console.log("====================================");
console.log("====================================");
//=========================================
//=========================================

// challenge 4


let regg = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// https? => In url, it initially contains http, and in http, it may contain s or not
//=========================================
// \/\/ => use \ in order to /  for no error to occur 
//=========================================
// (?:[-\w]+\.)? => possibility of existence  character or more or not
//=========================================
//  \.\w+ => character or more + space + character or more
//=========================================
// (?:\.\w+)? => possibility of existence ?: character or more + space +  character or more or not
//=========================================
// \/? => possibility of existence \ or not
//=========================================
// .* => zero or more character



//=========================================
//=========================================
console.log("====================================");
console.log("====================================");
//=========================================
//=========================================

// challenge 5

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let reg = /\d{1,2}(\/| - | )\d{1,2}(\/| - | )\d{2,4}/ig; // Write Pattern Here

console.log(date1.match(reg)); // "25/10/1982"
console.log(date2.match(reg)); // "25 - 10 - 1982"
console.log(date3.match(reg)); // "25 10 1982"
console.log(date4.match(reg)); // "25 10 82"


//=========================================
//=========================================
console.log("====================================");
console.log("====================================");
//=========================================
//=========================================

// challenge 6


let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re = /(https?:\/\/)?(www.)?\w+.org(.+)?/ig;
console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));