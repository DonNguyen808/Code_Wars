// Write a function to split a string and convert it into an array of words.

function stringToArray(string) {
    return string.split(' ')
}

let stringToArray = str => str.split(' ')

// Expected output: ["Robin", "Singh"]
console.log(stringToArray("Robin Singh"))

// Expected results: ["I", "love", "arrays", "they", "are", "my", "favorite"]
console.log(stringToArray("I love arrays they are my favorite"))

