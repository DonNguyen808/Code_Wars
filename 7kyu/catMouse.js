// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. 

function catMouse(x) {
    return x.length <= 5 ? 'Caught!' : 'Escaped!';
  }


// function catMouse(x) {
//     let distance = Math.abs(x.indexOf('C') - x.indexOf('m')) - 1
//     // console.log({ x, distance })
    
//     if (distance > 3) return 'Escaped!'
//     return 'Caught!'

// }

// function catMouse(x) {
//     let distance = Math.abs(x.indexOf('C') - x.indexOf('m')) - 1
    
//     if (distance > 3) {
//         return 'Escaped!'
//     } else {
//         return 'Caught!'
//     }


// }



// Escaped!
console.log(catMouse('C.....m'))

// Caught!
console.log(catMouse('C...m'))

