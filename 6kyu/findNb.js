function findNb(m) {
    let m = Math.sqrt(m) * 2;
    if (m != parseInt(m)){
      return -1;
    }
    let result = parseInt(Math.sqrt(m));
    return (result * (result + 1) == m) ? result : -1;
}