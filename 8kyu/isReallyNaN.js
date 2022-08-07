// I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.

// Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.

// Any solution is acceptable!


/* PREP
Parameter: can take any time, integer, string, boolean, undefined, NaN, 0
Return: returns false unless its NaN then returns true
Example: isReallyNaN('hello') => false
isReallyNan(NaN) => true
Psuedo Code: Makes a check if it equals NaN else return false

*/

// const isReallyNaN = Number.isNaN

const isReallyNaN = val => val != val

console.log(isReallyNaN(NaN))