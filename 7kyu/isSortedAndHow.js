function isSortedAndHow(arr) {
    return arr.every((x, i) => i == 0 || arr[i] >= arr[i - 1]) ? 'yes, ascending' :
            arr.every((x, i) => i == 0 || arr[i] <= arr[i - 1]) ? 'yes, descending' : 'no'
}

// Expected output: yes, descending
console.log(isSortedAndHow([11, 10, 9]), 'yes, descending')

// Expected output: yes, ascending
console.log(isSortedAndHow([5, 6, 7]), 'yes, ascending')

// Expected output: no
console.log(isSortedAndHow([2,10,6]), 'no')
