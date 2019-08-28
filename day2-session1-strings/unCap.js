/*Write a JavaScript function to Uncapitalize the first letter of each word of a string.
Test Data:
console.log(unCap('Js String Exercises'));
'js string exercises'
*/

const str = 'Js String Exercises'
function unCap(str) {
    const words = str.split(' ')
    let outputStr = ''
    for(let i = 0; i < words.length; i++) {
       outputStr = outputStr + words[i][0].toLowerCase() + words[i].slice(1)+' '
    }
    return outputStr
}

console.log(unCap(str))



