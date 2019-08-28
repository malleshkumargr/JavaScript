console.log(sayHi());
//console.log(greet());

function sayHi() {
    return 'HI'
}

//function expression (Assigning function to a variable)
//dont get hoisted

//greet()
//functions in javascript are treated as first class citizens
const greet = function() {
    console.log('hi');
}

greet();

