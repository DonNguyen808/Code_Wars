// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

// function greet3 (name, owner) {
//     if (name == owner) {
//       return 'Hello boss'
//     } else {
//       return 'Hello guest'
//     }
//   }

// Arrow Function
let greet3 = (name, owner) => name == owner ? 'Hello boss' : 'Hello guest'

testOwner = 'Don'
testName = 'Don'
testName2 = 'James'

// Expected output: 'Hello boss'
console.log(greet3(testName, testOwner))

// Expected output: 'Hello guest'
console.log(greet3(testName2, testOwner))