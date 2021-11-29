function solution(string) {
    return (string.replace(/([A-Z])/g, ' $1'));
}

// Expected output: camel Casing
console.log(solution('camelCasing'), 'camel Casing')

// Expected output: word
console.log(solution('word'), 'word')

// Expected output: ''
console.log(solution(''), '')

