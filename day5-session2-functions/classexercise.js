


var currentInventory = [ {name: "HTC", stock: 25},{name: "Nokia", stock: 1000}, {name: "Samsung", stock: 50},{name: "Sony", stock: 10}, {name: "Apple", stock: 15}];
var newInventory = [ {name: "LG", stock: 5}, {name: "Sony", stock: 10}, {name: "Samsung", stock: 5}, {name: "Apple", stock: 15}];

// function updateInventory(currentInventory, newInventory) {
//     for(let i = 0; i < currentInventory.length; i++) {
//         for(let j = 0; j < newInventory.length; j++) {
//             if(currentInventory[i].name === newInventory[j].name) {
//                 currentInventory[i].stock = currentInventory[i].stock + newInventory[j].stock;
//             } else {
//                 currentInventory.push(newInventory[j]);
//             }
//         }
//     }
//     return currentInventory;
// }

//const numbers = [{value:0}, {value:1}]
//undefined
//const count = numbers[0]
//undefined
//count
//{value: 0}
//count.value = 20
//10
//numbers
//[{value: 10}, {value: 1}]


function updateInventory(currentInventory, newInventory) {
    newInventory.forEach(function(newItem){
        const prodcut = currentInventory.find(function(currentItem){
            return currentItem.name == newItem.name;
        });
        console.log(prodcut);
        if(prodcut) {
            prodcut.stock = prodcut.stock + newItem.stock;
        } else {
            currentInventory.push(newItem);
        }
    });
    return currentInventory; 
}


console.log(updateInventory(currentInventory,newInventory));
