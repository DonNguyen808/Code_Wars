function smallestIntegerFinder(arr){
    let sortedNums = arr.sort((a,b) => a - b)
    return sortedNums[0]
}

num1 = [34, 15, 88, 2]  

num2 = [34, -345, -1, 100] 

console.log(smallestIntegerFinder(num1))
console.log(smallestIntegerFinder(num2))



// original did it with class
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)
//     }
//   }

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.