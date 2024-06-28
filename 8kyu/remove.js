/* 
Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
*/

// function remove (string) {
//     let stringList = string.split('')
//     if (stringList[stringList.length - 1] === '!') {
//         stringList.pop()
//     }
//     return stringList.join('')
// }

function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
}

// const remove = s => s.replace(/!$/, '');

console.log(remove("Hi!"), "Hi");
console.log(remove("Hi!!!"), "Hi!!");
console.log(remove("!Hi"), "!Hi");
console.log(remove("!Hi!"), "!Hi");
console.log(remove("Hi! Hi!"), "Hi! Hi");
console.log(remove("Hi"), "Hi");
