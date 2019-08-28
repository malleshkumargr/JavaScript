const source = 'bangalore', destination = 'mysore', distance = 145;

//the distance between bangalore and mysore is 145 kms

console.log('The distance between '+source+' and '+destination+' is '+(distance + 10) + ' kms');


const x = '10', y = 17.8, z = 100, a = '11.3', b = 'Hello';

console.log(typeof(x));
console.log(Number(x));
console.log(typeof(Number(x)));
console.log(parseInt(x));
console.log(parseInt(a));
console.log(Number(a));

console.log(Number.isNaN(x));
console.log(Number.isNaN(y));
console.log(Number.isNaN(z));
console.log(Number.isNaN(b));

console.log(String(y));
console.log(''+z) // '100'

