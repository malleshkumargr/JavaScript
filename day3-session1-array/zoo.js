const animals = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish",5]],
    ["Phil", ["grounding", 11]]
];

//console.log(animals)
//console.log(animals[0])
//console.log(animals[0][0])
//console.log(animals[0][1])
//console.log(animals[0][1][0])
//console.log(animals[0][1][1])


function myZoo(animals) {
    const output = []
    animals.forEach(function(animal){
        output.push(`${animal[0]} the ${animal[1][0]} is ${animal[1][1]}`)
    })
    return output
}

console.log(myZoo(animals))