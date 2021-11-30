const getSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}


console.log(getSum(10, 10))
console.log(getSum(-1, 0))
console.log(getSum(20, 5))


