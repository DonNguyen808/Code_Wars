function uniqueInOrder(it) {
    var result = []
    var last
    
    for (var i = 0; i < it.length; i++) {
      if (it[i] !== last) {
        result.push(last = it[i])
      }
    }
    
    return result
  }

// Expected output: ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('AAAABBBCCDAABBB'))

// Expected output: ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder('ABBCcAD'))

// Expected output: [1,2,3]
console.log(uniqueInOrder([1,2,2,3,3]))