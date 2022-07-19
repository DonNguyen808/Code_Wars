// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!


/* PREP
Parameter:
    given a integer, it can be positive or negative
    can it accept empty, null, strings?

Return:
    return the number of times it takes a odd number to reach the given value

Example:
    oddCount(7) => 4 because [1, 3, 5, 7]
    oddCount(10) => 5 because [1, 3, 5, 7, 9]

Pseudo Code:
    take the given integer and divide it by 2 which will give us how many odd numbers
    then use the Math floor method to round down


 */

function oddCount(n) {
    return Math.floor(n / 2)
}

console.log(oddCount(7))
console.log(oddCount(15))
console.log(oddCount(10))
console.log(oddCount(15023))
console.log(oddCount(1184.3))








