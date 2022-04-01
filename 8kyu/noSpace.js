function noSpace(x) {
    return x.split(' ').join('')
}

console.log(noSpace('    Hello World     '))

// function noSpace(x){
//     return x.replace(/\s/g, '');
//   }