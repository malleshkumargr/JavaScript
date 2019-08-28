const city = 'bangalore'
let anotherCity = ''
let reverseCity = ''

//copying string contents from 1 string to another
for(let i = 0; i < city.length - 1; i++) {
    anotherCity += city[i];
}
//console.log(anotherCity)

//reversing a string without inbuit methods
for(let i = city.length - 1; i >= 0; i--) {
    reverseCity += city[i];
}

console.log(reverseCity)