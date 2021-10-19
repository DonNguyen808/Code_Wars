function solution(nums) {
    return (nums || []).sort(function(a, b) {
        return a - b
    });
}

example = [1, 2, 10, 5, 20, 7]

//expected output: [1, 2, 5, 7, 10, 20]
console.log(solution(example), [1, 2, 5, 7, 10, 20])