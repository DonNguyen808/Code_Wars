/* 
Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

If the tail is right return true, else return false.

The arguments will always be non empty strings, and normal letters.
*/

/* PREP
Parameter: 2 parameters it takes,
1: is the animal string name
2: is the string letter of the last leter of the animal
Return:
    return true if it is the right tail
    return false - if it isn't the last letter of the animal
Example:
    correctTail('fox', 'x') => true
    correctTail('dog', 't') => false
Pseudo Code:
    check the first argument last letter
    return true if its the same
    return false if it isn't
*/

// function correctTail(body, tail) {
//     let animal = body[body.length - 1]
//     if (animal == tail){ 
//         return true
//     }
//     else {
//         return false
//     }
// }

let correctTail = (body, tail) => body[body.length - 1] == tail


console.log(correctTail("Fox", "x"), true);
console.log(correctTail("Rhino", "o"), true);
console.log(correctTail("Meerkat", "t"), true);  
      
    
  