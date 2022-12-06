/* 
Debugging sayHello function
The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

Example output:

Hello, Mr. Spock
*/

// function sayHello2(name) {
//     return `Hello, ${name}`
// }

let sayHello2 = name => `Hello, ${name}`

console.log(sayHello2('Mr. Spock'), 'Hello, Mr. Spock')
console.log(sayHello2('Captain Kirk'), 'Hello, Captain Kirk')
console.log(sayHello2('Liutenant Uhura'), 'Hello, Liutenant Uhura')
console.log(sayHello2('Dr. McCoy'), 'Hello, Dr. McCoy')