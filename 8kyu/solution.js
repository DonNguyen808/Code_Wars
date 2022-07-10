// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output


/* 
PREP
Parameter - given 2 string a , b , can it be empty?, the string will never be the same, will always have a shorter and longer

Return:
    combine the 2 string with the shoter one on the front and back and the longer one in the middle

Example:
    // ("1", "22") --> "1221"
    // ("22", "1") --> "1221"   

Pseudo Code:
    1. determine which is shorter and longer
    2. combine them
    3. return it

*/

function solution(a, b) {
    if (a.length > b.length) {
        return b + a + b
    }
    else {
        return a + b + a
    }
}



// function solution(a, b) {
//     return a.length < b.length ? a + b + a : b + a + b
// }

console.log(solution('45', '1'), '1451');
console.log(solution('13', '200'), '1320013');
console.log(solution('Soon', 'Me'), 'MeSoonMe');
console.log(solution('U', 'False'), 'UFalseU');
console.log(solution('1', '22'), '1221')
console.log(solution('22', '1'), '1221')

