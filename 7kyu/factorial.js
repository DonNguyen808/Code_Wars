const factorial = n => n ? factorial(n - 1) * n : 1;

console.log(factorial(0))