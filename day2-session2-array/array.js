//array is an ordered, integer indexed, collection of values

// const fruits = [] or new Array()

const players = ['dhoni', 'sachin', 'virat']

console.log(players) // ['dhoni', 'sachin', 'virat']
console.log(players)
console.log(players)


console.log(players[0]) // 'dhoni'
console.log(players[2]) // 'virat'
console.log(players[10]) // undefined

console.log(typeof players) // 'object'
console.log(Array.isArray(players)) // true


const student = {
    firstName: 'arjun'
}

console.log(typeof student)    //'object'
console.log(Array.isArray(student)) //false


//to add elements to an array
//add in the end

console.log(players.push('suresh')) // 4 (new length)
console.log(players) // ['dhoni', 'sachin', 'virat', 'suresh']

//beginning of an array
console.log(players.unshift('shewag'))
//players.unshift('shewag')
console.log(players)  // ['shewag', 'dhoni', 'sachin', 'virat', 'suresh']



//elements at specific indexes
players.splice(1, 0, 'rahul')
console.log(players) // ['shewag', 'rahul', 'dhoni', 'sachin', 'virat', 'suresh']

const fruits = []
fruits.push('apple','mango','chikoo','banana','water melon','strawberry')

//to remove elements from an arry
//from the end
console.log(players.pop()) // 'suresh' returns the element removed
console.log(players)

//from the beginning
players.shift() // 'shewag'
console.log(players)

//from a given index
players.splice(1,1)
console.log(players)

//update elements
players[0] = 'saurav'
console.log(players)

//find length of array
console.log(players.length)

players[players.length] = 'ajay'
console.log(players)


fruits.reverse()
console.log(fruits)

fruits.sort()
console.log(fruits)

// console.log(fruits.sort().revers())
console.log(players)
console.log(players.indexOf('sachin')) // 1
console.log(players.indexOf('zaheer')) // -1

const tags = ['js', 'string', 'exercise']
console.log(tags.join(' '))









