// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// function shortcut(str) {
//     return str.split('').filter(function(e) {
//       return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
//     }).join('')
//   }

function shortcut(string) {
  let vowelList = ['a', 'e', 'i', 'o', 'u']

  return string.split('').filter(e => 
    vowelList.indexOf(e) == -1
  ).join('')
}



// failed on some unknown test cases
// function shortcut(string) {
//   let vowelList = ['a', 'e', 'i', 'o', 'u']

//   let stringList = string.split('')

//   let result = []

//   for (let i = 0; i < stringList.length; i++) {
//     if (!vowelList.includes(stringList[i]))
//       result += stringList[i]
//   }
//     return result

// }


// function shortcut(string){
//   return string.replace(/[aeiou]/g,'')
// }




console.log(shortcut('hello'), 'hll');
console.log(shortcut('how are you today?'), 'hw r y tdy?');
console.log(shortcut('complain'), 'cmpln');
console.log(shortcut('never'), 'nvr');


