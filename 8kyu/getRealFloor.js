// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.


// Example
// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

/* PREP
Parameter: given a number, it can be negative
Return: starts at 0 instead of 1 therefore will be 1 difference and skips 13, but if its negative it remains unchanged
example: 0 => 1
    13 => 11
    -1 => -1
Pseudo Code: make a check on the number whether its positive or negative and if its higher than 13
    return the number

*/

testCase = 5
testCase2 = -3

function getRealFloor(n) {
    return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
  }



// function getRealFloor(n) {
//     if (Math.sign(n) == 1 && n >= 13) {
//         return n - 2
//     } else if (Math.sign(n) == 1) {
//         return n - 1
//     } else {
//         return n
//     }
// }

console.log(getRealFloor(testCase))
console.log(getRealFloor(testCase2))