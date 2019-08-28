//reusability, 1- function declaration
//keyword, function a name, n1 & n2 are parameters
//parameters are local variables, is available only inside the function
//anything inside {} is called body of the fucntion

function add(n1,n2) {
   var n3 = 500;
   {
     var n6 = 900;
     let n4 = 700; // Block Scope
     const n5 = 800; // Block Scope
   }
   console.log(n6);
   console.log(n4);
   console.log(n5);
    const result = n1 + n2; // as we have declared result, this varaible 'result' is available only within the function
   // n3 = n1;
    total = n1 + n2; // here total has become a global variable
    // return keyword is used to send back values, if the return keyword is not used, by default js sends back undefined
  //  return total;
    return result;
    //anything after return, will not be executed
    const name = 'bangalore'
}

// calling a function or invoking a fucntion
// 10 & 20 are arguments
console.log(add(10,20));

//if a variable is declared inside a fucntion, it is available only within the function and not outside
//console.log(result)
console.log(total);
console.log(n3);