/* 
Time to test your basic knowledge in functions! Return the odds from a list:

[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []

*/

/* 
 Taking in a list of integers
return the odd number from that list

*/

let exampleList = [1,2,3,4,5,6]

function odd(values) {
    // go through each element and check if its a odd number
    // return the odd number
    return values.filter(num => num % 2);
}

console.log(odd(exampleList), [1, 3, 5])