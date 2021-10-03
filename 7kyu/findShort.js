function findShort(s) {
    return Math.min.apply(null, s.split(' ').map(w => w.length))
}

console.log(findShort('shortest answer will be 1'))