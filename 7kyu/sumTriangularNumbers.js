function sumTriangularNumbers(n) {
    return n < 0 ? 0 : n * (n + 1) * (n + 2) / 6;
  }

// Expected output: 56
console.log(sumTriangularNumbers(6), 56)

// Expected output: 7140
console.log(sumTriangularNumbers(34), 7140)

// Expected output: 0
console.log(sumTriangularNumbers(-67), 0)