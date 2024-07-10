/* function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
  };


example = ["Telescopes", "Glasses", "Eyes", "Monocles"]

console.log(sortByLength(example)) */

















/* 
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

*/

/* 
P: an array including strings, wont be empty
R: return back the array sorted by the shortest length string to longest
E: ['goku', 'vegeta', 'freezer'] => 
P: can use the sort method - may just do it for me

*/

function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

// function sortByLength(array) {
//   let wordLength = []
//   for (let i = 0; i < array.length; i++) {
//     wordLength.push(array[i].length)
//   }
//   return wordLength

// }

console.log(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);

console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);

console.log(sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);

























