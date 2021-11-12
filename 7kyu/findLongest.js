const findLongest = l => l.reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);

example1 = [22, 41, 800, 70, 9000]
example2 = [10, 5, 34, 9, 530, 89]

// Expected result: 9000
console.log(findLongest(example1), 9000)

// Expected result: 530
console.log(findLongest(example2), 530)