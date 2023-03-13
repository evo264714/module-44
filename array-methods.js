const products = [
    {name: 'Laptop', price: 32000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'iPhone', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'white'},
    {name: 'sunglass', price: 300, brand: 'ribon', color: 'black'},
    {name: 'Camera', price: 9000, brand: 'canon', color: 'grey'}
    
];

const brands = products.map(product => product.brand)
// console.log(brands);
const prices = products.map(product => product.price);
// console.log(prices);

// products.forEach(product => console.log(product.color));

products.forEach(product =>{

})


//! Filter
const cheap = products.filter(product => product.price < 5000);
// console.log(cheap);

const specificName = products.filter(product => product.name.includes('n'))
// console.log(specificName);

//! find
const special = products.find(p => p.name.includes('n'));
console.log(special);