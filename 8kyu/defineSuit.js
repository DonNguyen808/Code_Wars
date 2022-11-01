// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

/* PREP
Parameter:
takes in a string number and the symbol of the suit card
Return back the string word of the suit in lowercase
example => '2@' => 'hearts'
pseudo code:
not sure if theres a method i can do
but i can assign the symbol to the word and have it check if its equal to it

*/

// function defineSuit(card) {
//     let suitType = {
//         '♣' : 'clubs',
//         '♦' : 'diamonds' ,
//         '♥':'hearts',
//         '♠' : 'spades',
//     }

//     let suit = card.split('')
//     let symbol = suit[suit.length - 1]

//     return suitType[symbol]
// }

function defineSuit(card) {
        const s = {
        '♣' : 'clubs',
        '♦' : 'diamonds' ,
        '♥':'hearts',
        '♠' : 'spades',
    }

    return s[card.charAt(card.length - 1)]
}

console.log(defineSuit('3♣'), 'clubs')
console.log(defineSuit('Q♠'), 'spades')
console.log(defineSuit('9♦'), 'diamonds')
console.log(defineSuit('J♥'), 'hearts')