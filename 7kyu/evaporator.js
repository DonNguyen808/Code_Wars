function evaporator(content, evap_per_day, threshold) {
    threshold = threshold / 100
    evap_per_day = evap_per_day / 100
    return Math.ceil(Math.log(threshold) / Math.log(1 - evap_per_day))
}


// Expected output: 29
console.log(evaporator(10, 10, 5), 29)