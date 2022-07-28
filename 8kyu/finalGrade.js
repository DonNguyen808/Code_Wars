/* 
Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases
Examples(Inputs-->Output):

100, 12 --> 100
99, 0 --> 100
10, 15 --> 100

85, 5 --> 90

55, 3 --> 75

55, 0 --> 0
20, 2 --> 0
*/

/* PREP
Parameter: 2 parameters, first takes in a whole number between 0 - 100, second how many projects between 0 and above

Return: a number that is either 100, 90, 75, 0 depending on the condition of the argument

Example:
    finalGrade(50, 3) => 75
    finalGrade(80, 1) => 90
    finalGrade(62, 20) => 100

Pseudo Code:
     make each condition for each different grade

*/

function finalGrade(exam, projects) {
    if ((exam > 90) || (projects > 10)) {
        return 100
    } else if ((exam > 75) && (projects >= 5)) {
        return 90
    } else if ((exam > 50) && (projects >= 2)) {
        return 75
    } else {
        return 0
    }
}

console.log(finalGrade(100, 12), 100)
console.log(finalGrade(99, 0), 100)
console.log(finalGrade(85, 5), 90)
console.log(finalGrade(55, 3), 75)
console.log(finalGrade(55, 0), 0)