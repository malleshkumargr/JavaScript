const function1 = function() { //es5 function
    console.log(this); // refers to global
}

//function1();

function summation() {
    console.log("Inisde summation function")
    console.log(this);
}

summation();

console.log(this) // {}

const function2 = () => { // es6 arrow function
    console.log(this) // {} // refers to empty obj
}

function2();

const person = {
    name: 'rakesh',
    skills: ['js', 'rb,', 'py'],
    details: function(){
        // this.skills.forEach(skill => {
        //     //function this refers to the value of this in the outer scope
        //     console.log(`${this.name} knows ${skill}`)
        // })
        //function this refers to the value of this in the outer scope
        this.skills.forEach(skill => console.log(`${this.name} knows ${skill}`));
    }
}

person.details();

// const person = {
//     name: 'rakesh',
//     skills: ['js', 'rb'],
//     details: () => {  // not recommended
//         console.log(this) // {}
//     }
// }

// person.details()

//es - ecmascript (ecma - european computer manufacturer association)
//1999 -es3
//2009 - es5
//2015 - es6
