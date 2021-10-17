function gimme(a) {
    return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
  }

  example = [13, 34, 24]

  //expected result: 2
  console.log(gimme(example))