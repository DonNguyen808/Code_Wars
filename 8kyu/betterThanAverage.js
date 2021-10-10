function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }

// Expected output: true
console.log(betterThanAverage([60, 70, 85], 95))