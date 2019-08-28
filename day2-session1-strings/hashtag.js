const str = 'make in india'
// taGenerator(str) #MakeInIndia

function tagGenerator(str) {
    let output = '#'
    const words = str.split(' ')

    for(let i = 0; i < words.length; i++) {
        output = output + words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()
    }
    return output
}

console.log(tagGenerator(str))
console.log(tagGenerator('india vs australia'))