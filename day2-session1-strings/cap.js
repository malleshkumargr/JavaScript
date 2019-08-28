/*Write a JavaScript function to Uncapitalize the first letter of each word of a string.
Test Data:
console.log(unCap('js string exercises'));
'Js String Exercises'
*/
const str = 'js string exercises'
function cap(str) {
    let output = ''
    const words = str.split(' ')
    for(let i = 0; i < words.length; i++) {
        output = output + words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()+' '
    }
    return output
}

console.log(cap(str))