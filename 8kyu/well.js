/* 
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

*/

/* PREP 
Parameter(input):
    array of strings, won't  be a number, boolean, or empty, null

Return(output):
    return "Publish" if the array contain 1 or 2 "good" , if more than 2 "good" return "I smell a series!". if no "good" return "Fail!"

Example:
    well("good") => Publish
    well("good", "good idea") => Publish
    well("good", "good", "good") => I Smell a series!
    well("bad") = "Fail!"

Pseudo Code:
    check how many "good" is in the array
    if 1 or 2 return publish
    else if more than 2 return I smell a series!
    else return fail

*/

// function well(x) {
//     let goodCount = 0
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] == "good") {
//             goodCount += 1
//         }
//     }
//     if (goodCount == 0) {
//         return "Fail!"
//     } else if (goodCount <= 2) {
//         return "Publish!"
//     } else {
//         return "I smell a series!"
//     }
// }

function well(x) {
    let goodCount = x.filter(el => el === "good").length
    return goodCount === 0 ? "Fail!" : goodCount <= 2 ? "Publish!" : "I smell a series!"
}



console.log(well(['bad', 'bad', 'bad']), 'Fail!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!')

