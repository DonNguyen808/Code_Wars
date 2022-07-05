/* You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

 Write a program that returns the girl's age (0-9) as an integer.

 Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number. */

 function getAge(inputString) {
  let firstChar = Number(inputString[0])
  return firstChar
 }

console.log(getAge("4 years old"), 4)
console.log(getAge("0 years old"), 0)

/* Parameter:
  takes in a string and grabs the first character string
*/

/* 
Return (output):
 return back the first character string as a number
*/

/* 
Example:
getAge("4 years old"), 4
getAge("0 years old"), 0
*/

/* 
Pseudo Code:
1. Take the first character in the string
2. convert it into a number
*/


/* 
Another solution:
Can simply convert it into a number, but only applies if you want the first character to be numeric
function getAge(inputString) {
  return parseInt(inputString)
}
*/


























// function getAge(inputString){
//   return parseInt(inputString);
// }

// let ageNine = "9 years old"

// console.log(getAge("1 years old"), 1)
// console.log(getAge("5 years old"), 5)
// console.log(getAge(ageNine), 9)
