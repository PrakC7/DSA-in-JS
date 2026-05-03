let prompt = require("prompt-sync")();
let p = prompt("Enter principle: ");
let r = prompt("Enter rate: ");
let t = prompt("Enter time: ");
console.log("Compound Interest: " + (p* Math.pow(1 + r/100, t) - p).toFixed(2));