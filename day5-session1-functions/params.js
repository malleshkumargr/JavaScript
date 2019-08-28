function sum(n1,n2) {
    console.log(arguments);
    console.log(n1,n2);
    return n1 + n2;
}

console.log(sum());
console.log(sum(10));
console.log(sum(10,20));
console.log(sum(10,20,30));

// if additional params are passed, extra one's are assigned
// if less params are passed, the value will be undefined

function total1() {
 //   return arguments['0'] + arguments['1'];
    return arguments[0] + arguments[1];
}

console.log(total(10,20)); // 

//arguments is special type of object where length property is supported and for loop can be used on this object.
// push() ---- arguments

function total(){
    console.log(arguments.length);
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }

    return sum;
}