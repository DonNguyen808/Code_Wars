function removeChar(str){
   str1 = str.split('');
   str1.shift();
   str1.pop();
   return str1.join('');
     
 };
  
testStr = 'Don'

// expect result: o
console.log(removeChar(testStr), 'o')
  
  
function removeChar2(str) {
  return str.slice(1, -1);
}

console.log(removeChar2('Dawn'))
  



