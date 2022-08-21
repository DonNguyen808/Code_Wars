// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

/* 
takes in 2 numbers
return list of the number between the 2
between(1, 5) => [1,2,3,4,5]
make a loop starting from the first num and stopping at the second num
*/

function between(a, b) {
    let numHolder = []
    for (let i = a; i <= b; i++) {
        numHolder.push(i)
    }
    return numHolder
}

console.log(between(1, 4), [1, 2, 3, 4])
console.log(between(-2, 2), [-2, -1, 0, 1, 2])