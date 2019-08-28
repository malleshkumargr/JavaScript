//falsy - false, 0, '', "", Nan, undefined, null
//truthy - true, 1, 'dct', -1, [], {}


function returnTruthy(values) {
    const truthies = values.filter(function(value){
        return value
    })
    return truthies
}

console.log(returnTruthy([false, 0, 1, undefined, '', NaN, null, [], {}, 'dct', -1]))


function returnFalsy(values) {
    return values.filter(function(value){
        return !value
    })
}

console.log(returnFalsy([false, 0, 1, undefined, '', NaN, null, [], {}, 'dct', -1]))

function filterValues(values) {
    const truthy = [], falsy = []
    values.forEach(function(value){
        if(value) {
            truthy.push(value)
        } else {
            falsy.push(value)
        }
    })
    // return [truthy, falsy]

    return {
        truthy,
        falsy
    }
}

console.log(filterValues([false, 0, 1, undefined, '', NaN, null, [], {}, 'dct', -1]))
