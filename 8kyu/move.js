/* 
Terminal game move function
In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15
*/

/* 
PREP
Parameter: only be whole positive integer, takes in 2 arguments; first is the current position number and second is the dice roll between 1 - 6 and counted twice

Return: current position number + dice roll number twice

Example:
move(4, 5) => 14
move(0, 2) => 4
move(23, 1) => 25

Pseudo Code:
get the sum of the first parameter and second multiply by 2



*/

// function move(position, roll) {
//     return position + roll * 2
// }

let move = (position, roll) => position + roll * 2


console.log(move(3, 6), 15)
console.log(move(0, 4), 8);
console.log(move(3, 6), 15);
console.log(move(2, 5), 12);
