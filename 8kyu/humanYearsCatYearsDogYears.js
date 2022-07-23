/*
Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that 
 */

/* PREP
Parameter:
  taking in 1 parameter that will be a positive whole integer

Return:
  if human year is 1, cat and dog is 15
  if human year is 2 , cat and dog is 15 + 9 = 24
  if human year is 3 or more, cat and dog is 15 + 9 + 4 (each additional year onward)

example:
  function humanYearsCatYearsDogYears(1) => [1, 15, 15]
  function humanYearsCatYearsDogYears(2) => [2, 24, 24]
  function humanYearsCatYearsDogYears(4) => [4, 32, 32]

Pseudo Code:
  make conditionals
  if 1 return [1, 15, 15]
  if 2 return [2, 24, 24]  15 + 9
  if 3 return [3, 28, 28] 15 + 9 + 4

*/



let humanYearsCatYearsDogYears = function(y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
  }


 
console.log(humanYearsCatYearsDogYears(1), [1,15,15]);

console.log(humanYearsCatYearsDogYears(2), [2,24,24]);

console.log(humanYearsCatYearsDogYears(10), [10,56,64]);
