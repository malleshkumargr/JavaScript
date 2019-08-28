function strWeight(a, b) {
    // console.log(a.length)
    // console.log(b.length)
    // if(a.length === 0 && b.length === 0) {
    //     return 'invalid'
    // }
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
        w: 23,
        x: 24,
        y: 25,
        z: 26
    };

    let aWeight = 0;
    let bWeight = 0;

    let alphas = a.split('');
    alphas.forEach(function(alpha) {
        aWeight = aWeight + alphabets[alpha];
    });

    alphas = b.split('');
    alphas.forEach(function(alpha) {
        bWeight = bWeight + alphabets[alpha]
    });

    if (aWeight === bWeight) {
        return 'equal'
    } else if (aWeight > bWeight) {
        return 1
    } else {
        return 2
    }
        

}


// console.log(strWeight('batman','superman'))
// console.log(strWeight('manbat','batman'))
console.log(strWeight('', ''))