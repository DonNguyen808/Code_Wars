function vertMirror(str) {
    return str.split('\n')
      .map(line => line.split('').reverse().join(''))
      .join('\n')
}
function horMirror(str) {
    return str.split('\n')
      .reverse()
      .join('\n')
}
function oper(fct, s) {
    return fct(s)
}


console.log(vertMirror("dcba\nhgfe\nlkji\nponm"))

console.log(horMirror("mnop\nijkl\nefgh\nabcd"))


s = "abcd\nefgh\nijkl\nmnop"
console.log(oper(vertMirror, "dcba\nhgfe\nlkji\nponm"))

console.log(oper(horMirror, "mnop\nijkl\nefgh\nabcd")  )