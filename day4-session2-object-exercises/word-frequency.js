const str = 'virat virat sachin dhoni virat sachin'

function frequency(str) {
    const data = {}
    const words = str.split(' ')
    words.forEach(function(word){
        if(data[word]) {
            data[word] += 1
        } else {
            data[word] = 1
        }
    })
    return data
}

console.log(frequency(str))
console.log(frequency('a a b b c a d e f g'))
console.log(frequency('Virat virat sachin Sachin'))
// console.log(frequency());


function reverseEachWord(str) {
    let reverse = ''
    const words = str.split(' ')

    for(let i = 0; i < words.length; i++) {
        for(let j = 0; j < words[i].length; j++) {
            
        }
    }

}


