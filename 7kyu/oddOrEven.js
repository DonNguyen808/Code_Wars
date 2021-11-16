function oddOrEven(array) {
    return array.reduce((a, b) => a + b, 0) % 2 ? 'even' : 'odd'

}


exampleOne = [1, 2, 8]
exampleTwo = [-1, 0, 53]
exampleThree = []

// Expected output: even
console.log(oddOrEven(exampleOne))

// Expected output: odd
console.log(oddOrEven(exampleTwo))

// Expected output: odd
console.log(oddOrEven(exampleThree))


