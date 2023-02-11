//   ---------------Challenge 2-----------------------
//   Challenge 1

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);

/*
    [++a]                                                                                                                            
    - Value: 11                                             
    - Explain:preincrement 
    [+]
    - Explain: Addition
    [+]  
    - Explain:unary plus
    [b++] 
    - value:20   
    - Explain:postincrement 
    [+] 
    - Explain: Addition  
    [+]     
    - Explain:unary plus
    [c++]
    - value:80   
    - Explain:postincrement 
    [-]
    - Explain:subtraction
    [+]
    - Explain:unary plus
    [a++]
    - value:11
    - Explain:postincrement     
*/
// new Values : a = 12 || b=21 || c=81
console.log(++a + -b + +c++ - -a++ + +a);
/*
    [++a]                                                                                                                            
    - Value: 13                                             
    - Explain:preincrement 
    [+]
    - Explain: Addition
    [-]  
    - Explain:unary negative
    [b] 
    - value:-21  
    [+] 
    - Explain: Addition  
    [+]     
    - Explain:unary plus
    [c++]
    - value:81   
    - Explain:postincrement 
    [-]
    - Explain:subtraction
    [-]
    - Explain:unary negative
    [a++]
    - value:-13
    - Explain:postincrement  
    [+] 
    - Explain: Addition 
    [+]     
    - Explain:unary plus
    [a]
    -value: 14
*/
// new Values : a = 14 || b=21 || c=82
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*
    [--c]                                                                                                                            
    - Value: 81                                             
    - Explain:predecrement 
    [+]
    - Explain: Addition
    [+]  
    - Explain:unary plus
    [b] 
    - value:21  
    [+] 
    - Explain: Addition  
    [--a]     
    value: 13
    - Explain:predecrement
    [*]
    - Exp;ain:Multiplication
    [+]  
    - Explain:unary plus    
    [b++]
    - value:21   
    - Explain:postincrement 
    [-]
    - Explain:subtraction
    [+]
    - Explain:unary plus
    [b]
    - value:22
    [*]
    - Exp;ain:Multiplication
    [a]
    -value:13
    [+] 
    - Explain: Addition 
    [--a]     
    - value:12
    - Explain:unary negative
    [-]
    - Explain:subtraction
    [+]
    - Explain:unary plus
    [true]
    -value : 1
*/
// ---------------------------------------------
//   Challenge 2

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// // Only Use Variables Value
// // Do Not Use Variable Twice
// console.log(+e * -d + --g *f); // 2000

d = "-100";
e = "20";
f = 30;
g = true;

console.log(-d + ++g * +(++e) + ++f)  ; // 173