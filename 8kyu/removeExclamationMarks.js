// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// Regular Expression
function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
}

// function removeExclamationMarks(s) {
//     return s.split('!').join('');
// }


console.log(removeExclamationMarks("Hello World!!", "Hello World"))



