const grow = x => x.reduce((a,b) => a * b);

test = grow([1,2,3])

// 1 * 2 * 3 = 6
console.log(test)