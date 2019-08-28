const source = 'bangalore', destination = 'mysore', distance = 145

//console.log(')


//es6 - template string || string literal
console.log(`The distance between ${source} and ${destination} is ${distance + 10} kms`)

const password = 'secret123';

console.log(password.length);

const firstName = 'mahesh';
console.log(firstName.toUpperCase()); // 'MAHESH'


const city = 'bangalore'
//string is an array of characters
console.log(city[0]) //'b'
console.log(city[1]) // 'a'
console.log(city[100]) //undefined


for(let i = 0; i < city.length;  i++) {
    console.log(city[i]);
}

city[0] = 'm'
console.log(city)

const fruits = ['apple', 'mango']
fruits[0] = 'water melon'
console.log(fruits)


