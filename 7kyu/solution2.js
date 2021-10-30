function solution2(str, ending) {
    return str.endsWith(ending)


}

// Expected output: true
console.log(solution2('abc', 'c'), true)

// Expected output: false
console.log(solution2('abc', 'cd'), false)

