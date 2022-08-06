// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

/* 
The unary plus operator precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already

*/

function getNumberFromString(s) {
    return +s.replace(/\D/g, "");
  }

console.log(getNumberFromString("1"), 1);
console.log(getNumberFromString("123"), 123);
console.log(getNumberFromString("th3is is nu4mber: 7"), 347);