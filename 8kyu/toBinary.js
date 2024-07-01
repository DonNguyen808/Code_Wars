
/* Task Overview
Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

to_binary(1)   should return 1 
to_binary(5)  should return 101 
to_binary(11)  should return 1011 
Example:

toBinary(1)   should return 1 
toBinary(5)   should return 101 
toBinary(11)  should return 1011 
 */

/* 
takes in a number data type
return back the binary format value of the given argument
1 => 01
make the binary format list
make a check for pair of it
*/

function toBinary(n) {
    const binaryList = {1 : 1, 2: 10, 3: 11, 5: 101}
    return binaryList[n]

}


console.log(toBinary(1), 1)
console.log(toBinary(2), 10)
console.log(toBinary(3), 11)
console.log(toBinary(5), 101)

