const user = {
    name: 'admin',
    isAdmin: true
}

//let token
//block of code
if(user.isAdmin) {
    token1 = 'secret123'
}

// available outside block
console.log(token)

function a1() {
    console.log(token);
}

console.log(a1());