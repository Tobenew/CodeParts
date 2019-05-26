var cars = [{
        module: 'Buick',
        price: 'Cheap'
    },
    {
        module: 'Bmw',
        price: 'Expensive'
    },
]
var prices = cars.map(function (car) {
    return car.price
})
console.log(prices)