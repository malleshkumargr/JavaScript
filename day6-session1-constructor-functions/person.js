function Person(name, country) {
    console.log('im inside the function');
    this.name = name;
    this.country = country;
    this.greet = function(){
        return 'Hi, my name is ' + this.name;
    }
    this.details = function() {
        return `${this.name} ${this.country}`;
    }
    this.sayhi = function(name) {
        return `Hi ${name}` + ' said '+ this.name;
    }
}

// treats as a regular function call
const p1 = Person();
console.log(p1) // undefined

const p2 = new Person('rahul','INDIA');
console.log(p2);
console.log(p2.name);
console.log(p2.greet());
console.log(p2.details());
console.log(p2.sayhi('ani'));
//console.log(p2.name);
//console.log(typeof p2) // 'object'

const p3 = new Person('sachin', 'INDIA');
console.log(p3);
console.log(p3.name);
console.log(p3.greet());
