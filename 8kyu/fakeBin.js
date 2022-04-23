// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// function fakeBin(x) {
//     let yArray = []
//     xArray = x.split('')
//     xArray.forEach(element => {
//         if(element >= 5) {
//             yArray.push('1')
//         } else {
//             yArray.push('0')
//         }
//     });
//     return yArray.join('')
// }

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? '0' : '1').join('')
}


// expected results: '01'
console.log(fakeBin('16'))




















