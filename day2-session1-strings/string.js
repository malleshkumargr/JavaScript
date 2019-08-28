const city = 'bangalore'

console.log(city.length)
console.log(city.toUpperCase())

console.log(city.slice(0,3))
console.log(city.slice(1))

//to capitalize
console.log(city[0].toUpperCase() + city.slice(1).toLowerCase())


//to check if a char is part of a string
console.log(city.indexOf('a')) //1
console.log(city.indexOf('z')) //-1

console.log(city.includes('a'))
console.log(city.includes('z'))

if(city.indexOf('a') >= 0) {
    console.log('a is present')
} else {
    console.log('char is not present')
}

console.log("*".repeat(25))

const numbers = '1234567890'

//phone format = (123) 456-7890
const firstHalf = numbers.slice(0,3)
const secondHalf = numbers.slice(3,6)
const thirdHalf = numbers.slice(6)

console.log(`(${firstHalf}) ${secondHalf}-${thirdHalf}`)


const state = 'bangalore is in karnataka'
console.log(state.charAt(0).toUpperCase()+state.slice(1,16)+state.charAt(16).toUpperCase()+state.slice(17))


const tags = 'js, rb, py, java'
console.log(tags.split(', '))
console.log(tags.split('-'))

const emails = '1@gmail.com, 2@gmail.com, 3@gmail.com'
console.log(emails.split(', '))

const locations = 'bangalore - mandya - mysore'
console.log(locations.split(' - '))






