// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.



/* 
PREP
Parameter:
    It will always start with 1 followed by 0 repeating and stops on the given size. Always a positive number

Return:
    return 1 and 0 until it reaches the size

Example:
    stringy(5) => 10101
    stringy(2) => 10
    stringy(1) => 1

Pseudo Code:
    create a variable to store the value
    make a for loop and add 1 and 0 when its a odd or even number
*/

function stringy(size) {
    let str = ''
    for (let i = 1; i <= size; i++) {
        str += i % 2
    }
    return str

}

console.log(stringy(2), 10)
console.log(stringy(5), 10101)
console.log(stringy(1), 1)






