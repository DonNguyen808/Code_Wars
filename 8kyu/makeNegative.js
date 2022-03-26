// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
    return -Math.abs(num)
}

function makeNegative2(num) {
  return num < 0 ? num : -num;
}



console.log(makeNegative(1), -1)  
console.log(makeNegative(-5),-5) 
console.log(makeNegative(0),0)   
console.log(makeNegative(0.12), -0.12)

console.log(makeNegative2(1),-1)