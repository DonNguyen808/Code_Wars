function queueTime(customers, n) {
    var w = new Array(n).fill(0);
    for (let t of customers) {
      let idx = w.indexOf(Math.min(...w));
      w[idx] += t;
    }
    return Math.max(...w);
  }

test = [1,2,3,4],1

//expected output: 10
console.log(queueTime(test))




