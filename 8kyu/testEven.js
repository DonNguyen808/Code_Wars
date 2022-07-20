/* 
In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.
*/

/* PREP
Parameter:
    We are taking in a integer
    will it always be a number?
    can it be a negative number?
    will it be a decimal?
    what if its null?

Return:
    returns back true or false if the number is even

Example:
    testEven(1) => false
    testEven(2) => true
    testEven(2.4) => true

Pseudo Code:
    use a method to make a check if the number is even or odd
 */

// function testEven(n) {
//     return n % 2 == 0
// }

let testEven = n => n % 2 == 0


console.log(testEven(0), true, "testEven for 0");
console.log(testEven(0.5), false, "testEven for 0.5");
console.log(testEven(1), false, "testEven for 1");
console.log(testEven(2), true, "testEven for 2");
console.log(testEven(-4), true, "testEven for 2");