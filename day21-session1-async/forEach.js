function myForEach(numbers, func) {
    for(let i = 0; i < numbers.length; i++) {
        func(numbers[i])
    }
}

myForEach([10,20,30], function(n){
    console.log(n)
})

const fruits = ['apple', 'mango', 'chikoo']

Array.prototype.myForEach = function(func){
    for(let i = 0; i < this.length; i++) {
        func(this[i])
    }
}

fruits.forEach(function(ele){
    console.log(ele)
})

const users = [
    { id: 1, name: 'sam'},
    { id: 2, name: 'sandesh'}
]

users.myForEach(function(user){
    console.log(user.id, user.name)
})

// fruits.first() // return value at the first index
// users.first()

//fruits.last() // return the value at the last index

Array.prototype.first = function() {
    return this[0]
}

Array.prototype.last = function() {
    return this[this.length - 1]
}

fruits.first()
console.log(fruits.first())

fruits.last()
console.log(fruits.last())
console.log(users.first())



