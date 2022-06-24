// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

// function nameShuffler(str) {
//     return str.split(' ').reverse().join(' ')
// }

const nameShuffler = str => str.split(' ').reverse().join(' ')

console.log(nameShuffler('john McClane'),'McClane john')
console.log(nameShuffler('don Smith'),'Smith don')
console.log(nameShuffler('kathy Augustine'),'Augustine kathy')

