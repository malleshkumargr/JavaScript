/*Function Name: stringChop
Number of inputs: 2

Write a JavaScript function to chop a string into chunks of a given length.
Test Data :
console.log(stringChop('resource));

return ['resource']

console.log(stringChop('resource', 2));
return ['re', 'so', 'ur','ce']

console.log(stringChop('resource', 3))
['res','our', 'ce']

*/

let str = 'resources'
function chopStr(str, count) {
    const output = []
    for(let i = 0; i < str.length; i = i + count) {
        output.push(str.slice(i, i + count))
    }
    return output;
}


console.log(chopStr(str,5))