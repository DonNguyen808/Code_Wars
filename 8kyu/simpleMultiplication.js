// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// function simpleMultiplication(num) {
//   if (num % 2 == 0) {
//     return num * 8
//   } else {
//     return num * 9
//   }
// }

// let simpleMultiplication = num => num % 2 == 0 ? num * 8 : num * 9

function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}

console.log(simpleMultiplication(9), 81)
console.log(simpleMultiplication(8), 64)
console.log(simpleMultiplication(5), 45)