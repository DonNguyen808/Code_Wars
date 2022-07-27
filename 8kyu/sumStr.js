/*
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1) 
 */

/* PREP
Parameter:
    taking 2 integer that is a string type
    if its empty, return 0
    what if null?

Return:
    return the sum of the string integer as a number and if its empty return 0

Example:
sumStr('1', '2') => '3'
sumStr('30', '67') => '97'
sumStr('', '34') => '34'

Pseudo Code:
convert the given string integer to a number
get the sum
convert it back to a string type 
return it
*/

function sumStr(a,b) {
        return num1 = Number(a);
        return num2 = Number(b);
        // return String(num1 + num2)
      }

// function sumStr(a, b) {
//     if ((a == '') || (b == '')) {
//         return '0'
//     } else if (a == '') {
//         let a = '0'
//     } else if (b == '') {
//         let b = '0'
//     } 
//     let sum = Number(a) + parseInt(b)
//     return String(sum)
// }



console.log(sumStr("4","5"), "9");
console.log(sumStr("34","5"), "39");
console.log(sumStr('', '34'), '34')
console.log(sumStr('', ''), '0')







    //   function sumStr(a,b) {
//     return String(Number(a)+Number(b));
//   }