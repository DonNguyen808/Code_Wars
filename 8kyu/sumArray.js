// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.


function sum (numbers) {

  return numbers.reduce((acc, c) => acc + c, 0)
} 


// Output: 9.2
console.log(sum([1, 5.2, 4, 0, -1]))

// Output: 0
console.log(sum([]))

// Output: -2.398
console.log(sum([-2.398]))




