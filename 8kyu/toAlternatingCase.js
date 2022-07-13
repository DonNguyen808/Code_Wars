// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.

/* PREP
Parameter(input):
    a string of letters

Return(output):
    return back the opposite casing if the letter was uppercase it is now lowercase, if it was lowercase it is now uppercase

Example:
    toAlternatingCase('HELLO') => hello
    toAlternatingCase('hello') => HELLO
    toAlternatingCase('hELLo') => HellO

Pseudo Code:
    split each character
    make a conditional to check if its uppercase or lowercase
    respond back the opposite casing
    return
*/

String.prototype.toAlternatingCase = function () {
    return this.split('').map(a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join('')
}

// function toAlternatingCase(str) {
//     let casing = str.split('')
//     let newCasing = []
//     for (let i = 0; i < casing.length; i++) {
//         if (str[i] == str[i].toUpperCase()) {
//             newCasing.push(str[i].toLowerCase())
//         } else {
//             newCasing.push(str[i].toUpperCase())
//         }
//     }
//     return newCasing.join('')
// }


console.log("hello world".toAlternatingCase(), "HELLO WORLD");
console.log("HELLO WORLD".toAlternatingCase(), "hello world");
console.log("hello WORLD".toAlternatingCase(), "HELLO world");
console.log("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
console.log("12345".toAlternatingCase(), "12345");
console.log("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
console.log("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
console.log("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World");