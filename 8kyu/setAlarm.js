// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise.

// function setAlarm(employed, vacation) {
//     if (employed === true && vacation === false) {
//         return true
//     } else {
//         return false
//     }
// }

// function setAlarm(employed, vacation) {
//     return employed && !vacation;
// }

// truthy and falsy
const setAlarm = (employed, vacation) => employed && !vacation

console.log(setAlarm(true, false), true)
console.log(setAlarm(false, false), false)
console.log(setAlarm(true, true), false)
console.log(setAlarm(false, true), false)










