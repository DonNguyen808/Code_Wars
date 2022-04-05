// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:



function digitze(n) {
    return String(n).split('').map(Number).reverse()
    // return (n + '').split('').map(Number).reverse()
}

// 348597 => [7,9,5,8,4,3]
console.log(digitze(348597))
// 0 => [0]
console.log(digitze(0))

