/* 
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/

/* PREP
Parameter:
taking in a string that will have integers we need to replace
will it ever be empty?


Return:
    if it has 5 return S
    if it has  0 return O
    if it has 1 return I
    is it only upper case or will it be lower case

Example:
    correct(5occer) => Soccer
    correct(0ctopus) => Octopus
    correct(1on) => Ion

Pseudo Code:
use regular expression to replace

*/

correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')

console.log(correct("L0ND0N"),"LONDON");
console.log(correct("DUBL1N"),"DUBLIN");
console.log(correct("51NGAP0RE"),"SINGAPORE");
console.log(correct("BUDAPE5T"),"BUDAPEST");
console.log(correct("PAR15"),"PARIS");