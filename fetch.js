//! 1. JSON => stringify, parse

const student = {
    name: 'Sakib Hasan',
    age: 32,
    movies: ['king khan', 'movie-2']
}
const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

//! 2. fetch
//* fetch('url')
//* .then(res => res.JSON())
//* .then(data => console.log(data));

//! Keys, values
const keys = Object.keys(student);
const values = Object.values(student);

//! for 
const numbers = [23, 64, 27, 56, 63, 67, 900];
// numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

//! for of on array like object
//! loop on an object using for in
//! Add or remove from an array

const products = [
    {name: 'Laptop', price: 32000, brand: 'len', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'HTC', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'white'},
    {name: 'sunglass', price: 300, brand: 'ray', color: 'black'},
    {name: 'Camera', price: 9000, brand: 'canon', color: 'grey'}
    
];

const newProduct = {name: 'webcam', price: 700, brand: 'red'};

//! copy products array and the add newProduct
const newProducts = [...products, newProduct];
// console.log(newProducts);

//! create a new array without one specfic item
//! remove phone means create a new array without the phone

const remaining = products.filter(product => product.name !== 'phone')
console.log(remaining);