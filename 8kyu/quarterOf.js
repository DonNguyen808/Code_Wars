// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// const quarterOf = m => Math.ceil(m / 3);

const quarterOf = (month) => {
    if (month <= 3) {
      return 1
    } else if (month <= 6) {
      return 2
    } else if (month <= 9) {
      return 3
    } else if (month <= 12) {
      return 4
    }
    
  }



console.log(quarterOf(1))
console.log(quarterOf(7))
console.log(quarterOf(10))
console.log(quarterOf(4))




// PREP
// Parameter(input) - going to take in a single integer from 1 to 12
// return whether that number belongs to the 4 quarters - 1st (1-3) 2nd (4-6) 3rd (7-9) 4th (10-12)
// examples - 
// console.log(quarterOf(3), 1)
// console.log(quarterOf(8), 3)
// console.log(quarterOf(11), 4) 
/* 
Pseudo code - 
make a check if the number belongs to which quarter
make the conditional
return back

*/


