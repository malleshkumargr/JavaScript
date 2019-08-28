const cafe = {
    title: 'the studio cafe',
    location: 'jayanagar',
    cuisines: ['cafe','Beverages'],
    phoneNumbers: ['1234567890', '1234561234'],
    address: {
        body: 'jayanagar',
        geo: {
            lat: 17.7456,
            long: 31.1212
        }
    },
    info: {
        'Indoor Seating' : true,
        'Alcohol' : false
    },
    reviews: [
        {
            user: {
                name: 'ABC',
                isExpert: true
            },
            rating: 4.0,
            body: 'nice place',
            createdAt: new Date()
        }
    ]
}

console.log(cafe.address.body)
console.log(cafe.info.Alcohol)
console.log(cafe.reviews[0].user.name)