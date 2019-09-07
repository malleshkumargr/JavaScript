//Javascript trates funtions as first class citizens - allows us to assign functions to variables
//function expression
const greet = function(n) {
    console.log(n)
}

//higher order functions
// if a fucntion takes another fucntionas an argument OR if a function returns another fucntion then that function is called as HOF
function sayHello(greet, name) {
    setTimeout(() => {
        greet(name)
    }, 2000)
}

sayHello(greet, 'ani')

sayHello(function(n){
    console.log('inline function', n)
}, 'dct')