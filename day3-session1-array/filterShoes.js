const products = [
    {id: 1, name: 'puma1', brand: 'puma'},
    {id: 2, name: 'adidas1', brand: 'adidas'},
    {id: 3, name: 'puma', brand: 'puma'},
    {id: 4, name: 'nike1', brand: 'nike'}
]

function filterShoes(products, brands) {

    return products.filter(function(product) {
        return brands.includes(product.brand)
    })

}

console.log(filterShoes(products, ['puma', 'adidas']))
console.log(filterShoes(products, ['puma','adidas','nike']))
console.log(filterShoes(products, 'puma'))