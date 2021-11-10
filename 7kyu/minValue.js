function minValue(values) {
    let arr = Array.from(new Set(values))
    return parseInt(arr.sort().join(''))
}


example = [1, 1, 2, 3]
exampleTwo = [5, 1, 4]

// Expected output: 123
console.log(minValue(example), 123)

// Expected output: 145
console.log(minValue(exampleTwo), 145)