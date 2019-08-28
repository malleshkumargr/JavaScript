//all primitive data types are pass by value
let city = 'bangalore';
console.log(city);
function changeCity(city) {
    city = 'mysuru';
    console.log(city);
    return city;
}

console.log(changeCity(city));
console.log(city);

//all object types are pass by reference
let location = {
    name: 'jayanagar'
};
const fruits = ['mango'];
console.log(location);
function changeLocation(location,fruits) {
    location.name = 'basaveshwaranagar';
    fruits[0] = 'apple';
    console.log(location);
    return location;
}

console.log(changeLocation(location, fruits));
console.log(location);


