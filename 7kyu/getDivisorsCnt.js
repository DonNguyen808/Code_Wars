function getDivisorsCnt(n) {
    for (var d = 0, i = n; i > 0; i--) {
      if (n % i == 0) d++;
    }
    
    return d;
  }


// Expected output: 3 (1, 2, 4)
console.log(getDivisorsCnt(4), 3)   