// Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

// Make sure that your function does not return a false positive by only checking the day.

/* 
using the date object as the parameter

returns true if the date is today and false if it isn't

*/
const today = new Date();

const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1)

const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);

function isToday(date) {
    return new Date().toDateString() === date.toDateString();
    
}

console.log(isToday(today), true)
console.log(isToday(yesterday), false)
console.log(isToday(tomorrow), false)