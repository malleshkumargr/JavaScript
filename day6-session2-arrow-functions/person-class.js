//front end - React
class Person {
    constructor(name,age) {
        this.name =  name;
        this.age = age;
    }

    greet() {
        return 'Hi, my name is ' + this.name;
    }
}

const p1 = new Person('rahul',21)
console.log(p1.greet());
