// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


/* 
P: given a string with !
R: return back the value without the !
E: 'keep! => 'keep'
P: split character into a array, split at ! and join back together
*/

function removeExclamationMarks(s) {
    return s.split('!').join('')
}

console.log(removeExclamationMarks("Hello World!"), "Hello World")


