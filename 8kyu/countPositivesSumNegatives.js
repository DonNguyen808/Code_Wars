// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.




function countPositivesSumNegatives(array) {
    if (array == null || array.length == 0) {
        return [];
    }

    let positive = 0;
    let negative = 0;

    for (let i = 0; i < array.length; i++) {
        if(array[i] > 0) {
            ++ positive;
        } else {
            negative += array[i];
        }
    }
    return [positive, negative];
}

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))









