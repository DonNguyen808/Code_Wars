// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

/* 
P: takes in 2 parameters: 1st is list of nums, 2nd is the divisor
R: return all the nums which goes into the divisor
E: [1,2,3,4,5], 2 => [2,4]
P: go through each element and check if it goes into the divisor
*/

function divisibleBy(numbers, divisor) {
    return numbers.filter(num => num % divisor == 0)
}

// let divisibleBy = (numbers, divisor) => numbers.filter(num => num % divisor == 0)


console.log(divisibleBy([1,2,3,4,5,6], 2), [2,4,6]);
console.log(divisibleBy([1,2,3,4,5,6], 3), [3,6]);
console.log(divisibleBy([0,1,2,3,4,5,6], 4), [0,4]);
console.log(divisibleBy([0], 4), [0]);
console.log(divisibleBy([1,3,5], 2), []);