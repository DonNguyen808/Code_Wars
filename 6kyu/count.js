function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }

  //expected result: {'a': 2, 'b': 1, 'c': 3, 'd': 4}
  test = 'aabcccdddd'

  console.log(count(test))