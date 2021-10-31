function findUniq(arr) {
    arr.sort((a, b) => a - b);
    return arr[0] == arr[1] ? arr.pop() : arr[0]
}

argument = [0, 0, 1, 0, 0]

// Expected output: 1
console.log(findUniq(argument), 1)

