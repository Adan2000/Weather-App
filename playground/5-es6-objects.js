// object property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name, 
    age: userAge, 
    location: 'Philedelphia'
}

console.log(user)

// Object destructuring 

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201, 
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock 

const { productLabel, stock, price, salePrice, rating = 5 } = product

// console.log(productLabel)
// console.log(stock)
// console.log(price)
// console.log(salePrice)
// console.log(rating)

const transaction = (type, { label, stock } = {} ) => {
    console.log(type, label, stock)
}
//by using a = {} we set up a default value.
transaction('order', product)