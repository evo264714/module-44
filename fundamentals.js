//! 1. How to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';

//! 2. Conditions
//! 6 basic Conditions >, <, ===, !==, <=,>=
//! multiple conditions: &&, ||
if(fatherName === 'arnlod' || season === 'rainy'){

} 
else if(fatherName === 'Arnold'){

}
else{

}

//! 3. Array declare
//! Array index
//! Array length, push
const numbers = [89, 35, 98, 12];
numbers[0] = 56;

//! 4. for loop
for(let i = 0; i < numbers.length; i++){
    const number = number[i];
    console.log(number);
}

//! 5. Function
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiply(4, 4);
console.log(output);

//! 6. Object
//! 3 ways to Access properties by name
const student = {
    name: 'Sakib Hasan',
    age: 32,
    movies: ['king khan', 'movie-2']
}

const myVar = 'age';

console.log(student.age); //* direct by property
console.log(student['age']); //* access via property name string
console.log(student[myVar]); //* access via property name in a variable