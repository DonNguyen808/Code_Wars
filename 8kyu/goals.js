// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:
// 5, 10, 2  -->  17

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}

console.log(goals(1, 2, 3), 6)
console.log(goals(43, 10, 5), 58)
console.log(goals(0, 0, 0), 0)


//PREP
// parameter
// integers
// return a integer
// sum