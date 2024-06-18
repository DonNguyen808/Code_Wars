/* 
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/

function position(letter) {
    let string = '0abcdefghijklmnopqrstuvwxyz'
    let alphabet = string.split('')

    return `Position of alphabet: ${alphabet.indexOf(letter)}`
}

// let position = letter => `Position of alphabet: ${'0abcdefghijklmnopqrstuvwxyz'.split('')
// .indexOf(letter)}`

console.log(position("a"),"Position of alphabet: 1")
console.log(position("z"),"Position of alphabet: 26")
console.log(position("e"),"Position of alphabet: 5")