let humanYearsCatYearsDogYears = function(y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
  }


 
console.log(humanYearsCatYearsDogYears(1), [1,15,15]);

console.log(humanYearsCatYearsDogYears(2), [2,24,24]);

console.log(humanYearsCatYearsDogYears(10), [10,56,64]);
