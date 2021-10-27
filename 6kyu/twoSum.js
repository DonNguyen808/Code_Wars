function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}

// Expected output: [0, 2]
console.log(twoSum([1, 2, 3], 4), [0, 2])

