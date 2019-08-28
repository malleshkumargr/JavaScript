const alphabets = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    W: 23,
    X: 24,
    y: 25,
    z: 26
}

function strWeight(str1, str2) {
    let str1Weight = 0;
    let str2Weight = 0;

    let alphas = str1.split('')
    alphas.forEach(function(alpha){
        str1Weight = str1Weight + alphabets[alpha]
    })

    alphas = str2.split('')
    alphas.forEach(function(alpha){
        str2Weight = str2Weight + alphabets[alpha]
    })

    // console.log(str1Weight)
    // console.log(str2Weight)

    if(str1Weight > str2Weight) {
        return 1;
    } else if(str1Weight === str2Weight) {
        return 'equal'
    } else {
        return 2
    }
    
}


console.log(strWeight('batman','superman'))
console.log(strWeight('manbat','batman'))
