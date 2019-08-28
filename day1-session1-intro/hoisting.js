console.log(name) //undefined
console.log(city) //undefined

//console.log(location)
//var gets hoisted

var name = 'sachin'
console.log(name)

var city = 'bangalore'



//let and const dont get hoisted
//ReferenceError: playerName is not defined
let playerName = 'rahul'
console.log(playerName);