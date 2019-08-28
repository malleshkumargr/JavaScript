let obj = {
    a: 1,
    b: 2,
    c: 3
}

let obj2 = {
    first: 'Matt',
    last: 'Lane',
    isDogOwner: true
}

function objValuesInArray(obj) {

    console.log(obj)
    const objValueArr = []

    if(obj === undefined) {
        return objValueArr
    }

    for(let key in obj) {
        objValueArr.push(obj[key])
    }
    return objValueArr
}

console.log(objValuesInArray(obj))
console.log(objValuesInArray({}))
console.log(objValuesInArray(obj2))


//code written in class
const obj1 = {a: 1, b: 2, c: 3}
function values(obj) {
    const output = []
    for(let key in obj) {
        output.push(obj[key])
    }
    return output
}

console.log(values(obj1)) // [1, 2, 3]


[['a',1], ['b',2]]
//{'a':1, 'b':2}


