function alphabetWar(fight) {
    let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1}
    let result = fight.split('').reduce((a, b) => a +(map[b] || 0), 0);
    return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Lets fight again!";
}


rightWin = 'zzzzs'
leftWin = 'wwwwwwz'
lose = 'zdqmwpbs'

console.log(alphabetWar(rightWin))
console.log(alphabetWar(leftWin))
console.log(alphabetWar(lose))


