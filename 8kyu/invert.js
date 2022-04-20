// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// function invert(array) {
//     return array.map(x => x === 0 ? x : -x);

// }

function invert(array) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr.push(-array[i])
    }
    return newArr
  }

// [-1,-2,-3,-4,-5]
console.log(invert([1,2,3,4,5]))

// [-1,2,-3,4,-5]
console.log(invert([1,-2,3,-4,5]))

// []
console.log(invert([]))