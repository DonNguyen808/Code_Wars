// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

/*PREP
Parameter:
    an aray of whole integer positive numbers that won't have negative and not in order of some kind

Return:
    returns back the lowest ID unique number

Example:
    [4, 6, 9, 4, 0, 5] => 1


 */

function nextId(ids) {
    let num = 0;
    while (ids.includes(num)) num++;
    return num
}

console.log(nextId([4, 6, 9, 4, 0, 5]), 1)