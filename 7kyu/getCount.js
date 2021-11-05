function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }


console.log(getCount('aeioh'), 4)
console.log(getCount('navegizocu'), 5)
console.log(getCount('232'), 0)