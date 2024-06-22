/* 
Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/

function sumArray2(arr) {
    if (arr == null || arr < 2) return 0
    let total = 0
    let sorted = arr.sort((a,b) => a - b)
    for (let i = 1; i < sorted.length - 1; i++) {
        total += sorted[i]
    }
    return total;
}

console.log(sumArray2(null), 0 );
console.log(sumArray2([ ]), 0 );
console.log(sumArray2([ 3 ]), 0 );
console.log(sumArray2([ 3, 5 ]), 0 );
console.log(sumArray2([ 6, 2, 1, 8, 10 ]), 16 );
console.log(sumArray2([ 0, 1, 6, 10, 10 ]), 17 );
console.log(sumArray2([ -6, -20, -1, -10, -12 ]), -28 );
console.log(sumArray2([ -6, 20, -1, 10, -12 ]), 3 );



