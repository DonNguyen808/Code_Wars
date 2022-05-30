// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

// function isDivideBy(number, a, b) {
//     if ((number % a == 0) && (number % b == 0)) {
//         return true
//     } else {
//         return false
//     }

// }

const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;

// ->  true
console.log(isDivideBy(-12, 2, -6))

// ->  false
console.log(isDivideBy(-12, 2, -5))

// -> false
console.log(isDivideBy(45, 1, 6))

// -> true
console.log(isDivideBy(45, 5, 15))

// -> true
console.log(isDivideBy(4, 1, 4))

// -> true
console.log(isDivideBy(15, -5, 3))







// PREP
// integers 2
// return true or false if the 2 parameters divide
// check if a and b go into number