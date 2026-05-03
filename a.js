// const temp = 10;
// temo = 100;

// let temp = 10;
// temp = 100;
// console.log(temp);
// var temp = 10;

// a = 10;
// console.log(a);

// let a = 10;
// let b = 20;
// console.log(a + b);


// concatenation of string
// let s1 = "Hello";
// let s2 = "World";
// console.log(s1 + " " + s2);
// console.log(typeof(s1+s2));
// let temp = 10;
// console.log(s1 + " " + temp);
// console.log(typeof(s1 + " " + temp));

// let a = 10;
// let b = 20;
// console.log("The sum of " + a + " and " + b + " is: " + (a + b));
// console.log( a + b + " is the sum of " + a + " and " + b);

// + is used for both concat and sum
// type coercion
// console.log('1' + 1);
// console.log('1'-1);

//npm install prompt-sync
// let prompt = require('prompt-sync')();
// let age = Number(prompt("Enter your age: "));
// console.log(`Age ${age}`);

// swappping using temp variable
// let a = 10;
// let b = 20;
// let temp = a;
// a = b;
// b = temp;
// console.log(`a: ${a}, b: ${b}`);

// swappping without using temp variable
// let a = 10;
// let b = 20;
// a = a + b; 
// b = a - b;
// a = a - b;
// console.log(`a: ${a}, b: ${b}`);

// swapping with de-structuring array
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(`a: ${a}, b: ${b}`);