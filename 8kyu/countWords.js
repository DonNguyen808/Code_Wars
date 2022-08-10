// You have to ensure that spaces in string is a whitespace for real.

// Let's take a look on some examples:

// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1
// // ... and so on
// What kind of tests we made for your code:

// Function have to count words and not spaces. You have to be sure that you doing it right
// Empty string has no words.
// String with spaces around should be trimmed.
// Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
// Doublecheck that words with chars like -, ', ` are counted right.

/* PREP
Parameter:
    receive a string which makes up a word
Return:
    returns a number of how many words
Example:
    countWords('hello there') => 2
Pseudo Code:
    loop through each character
    makes a check if its a space
    knows its a word when it encounters a space
    can have a counter track it     

*/

const countWords = str => str.split(/\s+/).filter(x => x).length

console.log(countWords('hello therer'))