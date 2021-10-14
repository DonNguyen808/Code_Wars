function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
  }

example = [2, 3, 1, 4, 5]

// expected output: [ 2, 3, 4, 5]
console.log(removeSmallest(example))
