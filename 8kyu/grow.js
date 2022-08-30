// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// function grow(x) {
//     return x.reduce((a, b) => a * b)
// }

const grow = x => x.reduce((a,b) => a * b);

let test = grow([1,2,3])

console.log(test, 6)
console.log(grow([4,6,7]), 168)
console.log(grow([10,329,1]), 3290)

















