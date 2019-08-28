const person = {
    name: 'arjun',
    city: 'bangalore',
    age: 21
}

console.log(person.name) //'arjun'
console.log(person['city']) //'bangalore'

const prop = 'age' // whenever property is assigned to variable, if we have to get the property value using that variable we have to use [] notation

console.log(person.prop) // undefiend
console.log(person[prop]) // 21 // person['age']

//loop over an object in javascript
for(let key in person) {
    console.log(typeof key, key, person[key])
}