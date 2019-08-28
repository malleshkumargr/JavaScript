const items = [
    {id: 1, name: 'chilly chicken', isVeg: false},
    {id: 2, name: 'gobi', isVeg: true},
    {id: 3, name: 'mutton biriyani', isVeg: false},
    {id: 4, name: 'panner biriyani', isVeg: true}
]

function findVeg(items) {
    return items.filter(function(item){
        return item.isVeg
    })
}

console.log(findVeg(items))