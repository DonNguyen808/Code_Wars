/* Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS. */


String.prototype.isUpperCase = function() {
    return this == this.toUpperCase()
}

  console.log(isUpperCase('c'), false);
  console.log(isUpperCase('C'), true);
  console.log(isUpperCase('hello I AM DONALD'), false);
  console.log(isUpperCase('HELLO I AM DONALD'), true);
  console.log(isUpperCase('ACSKLDFJSgSKLDFJSKLDFJ'), false);
  console.log(isUpperCase('ACSKLDFJSGSKLDFJSKLDFJ'), true);

  /* PREP
  Parameter(input) - a string

  Return(output) - return true if check the string is in all caps even if its empty or false if its not in all caps

  example - isUpperCase('HELLO') => true 
    isUpperCase('hello) => false
    isUpperCase('Hello') => false
    isUpperCase('') => true

  pseudo code
  1. check if its in all caps

     */