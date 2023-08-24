// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// dealing with a boolean value
/* 
returns "Yes" if its true or "No" if its false
true => "Yes" ; false => "No"
a conditional between the 2 options
*/


// function boolToWord(bool) {
//     if (bool) {
//         return "Yes"
//     } else {
//         return "No"
//     }
// }

let boolToWord = bool => bool ? "Yes" : "No"

console.log(boolToWord(true), 'Yes')
console.log(boolToWord(false), 'No')