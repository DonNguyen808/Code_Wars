/* 
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

multiply(3)==15 // 3 * 5¹
multiply(10)==250 // 10 * 5²
multiply(200)==25000 // 200 * 5³
multiply(0)==0 // 0 * 5¹
multiply(-3)==-15 // -3 * 5¹
*/

/* PREP
Parameter: takes in a number, it can be negative or positive
Return: returns back the number given multiply by 5 and raised by the number of digit it was given
Example: multiply(3) => 15 // 3 * 5^1
Psuedo Code: 1. take the number given and multiply by 5
2. grab the length + 1 



*/


function multiply(number) {
    return number * Math.pow(5, Math.abs(number).toString().length);
  }

console.log(multiply(3)==15) // 3 * 5¹
console.log(multiply(10)==250) // 10 * 5²
console.log(multiply(200)==25000) // 200 * 5³
console.log(multiply(0)==0) // 0 * 5¹
console.log(multiply(-3)==-15) // -3 * 5¹