// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!


// function sayHello(name, city, state) {
//     let nameTag = (name.join(' '))
//     let welcomeMessage = `Hello, ${nameTag}! Welcome to ${city}, ${state}!`
//     return welcomeMessage
// }

let sayHello = (name, city, state) => `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`


let names = ['John', 'Smith']
let city = 'Los Angeles'
let state = 'California'

console.log(sayHello(names, city, state))

