let prompt = require("prompt-sync")();
let s = prompt("Enter a string:");
let consonant = 0;
let vowel = 0;
for(let i=0; i<s.length; i++) {
    let char = s[i].toLowerCase();
    switch(char) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u": vowel++;
        break;
        default: consonant++;
    }
}
console.log("Number of vowels: " + vowel);
console.log("Number of consonants: " + consonant);