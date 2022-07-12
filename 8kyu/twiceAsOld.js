// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

/* PREP
Parameter (input):
    Will take 2 different positive integer, will it ever be negative, 0, empty?

Return:
    return back how many years the father was twice the son age or how many years until he is twice his age

Example:
    twiceAsOld(40, 20) => 0
    twiceAsOld(60, 40) => 20

Pseudo Code:
    Multiply the son age by 2 to get the number we need 
    then subtract the father age to see the number he needs to be double
    use the math absolute to not get a negative number
    return the number 


*/


function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld)
}

console.log(twiceAsOld(40, 20), 0)

console.log(twiceAsOld(60, 40), 20)

console.log(twiceAsOld(36,7) , 22);

console.log(twiceAsOld(55,30) , 5);

console.log(twiceAsOld(42,21) , 0);

console.log(twiceAsOld(22,1) , 20);