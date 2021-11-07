function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
  };


example = ["Telescopes", "Glasses", "Eyes", "Monocles"]

console.log(sortByLength(example))