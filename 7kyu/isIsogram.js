function isIsogram(str) {
    return !/(\w).*\1/i.test(str)
}

firstExample = 'abcdefg'
secondExample = 'abcabc'

// Expected output: true
console.log(isIsogram(firstExample), true)

// Expected output: false
console.log(isIsogram(secondExample), false)

