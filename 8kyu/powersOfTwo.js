// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

/* PREP
Parameter: 
  a positive integer

Return:
  return an array of all the powers of 2 and stopping at the given argument

Example:
  powersOfTwo(4) => [1, 2, 4, 8, 16]

Pseudo Code:
  make a for loop - stopping at the given argument
  make a variable to store the list
  everytime it loops use the math.pow method and add it to the list
  return the result list
  

*/

function powersOfTwo(n) {
  let result = []
  for (let i = 0; i <= n; i ++) {
    result.push(Math.pow(2, i))
  }
  return result
}

console.log(powersOfTwo(0), [1])
console.log(powersOfTwo(1), [1, 2])
console.log(powersOfTwo(4), [1, 2, 4, 8, 16])


