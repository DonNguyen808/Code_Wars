function checkExam(array1, array2) {
    const reducer = (a, e, idx) => {
        if (e === '') {
            return a;
        }

        if (e === array1[idx]) {
            return a += 4;
        }

        return --a;
    }
    const score = array2.reduce(reducer, 0);
    return score < 0 ? 0 : score;
}

example1 = ['a', 'b', 'd', 'd', 'f']
example2 = ['a', 'b', 'c', 'd', 'f']

// expected output: 15
console.log(checkExam(example1, example2))