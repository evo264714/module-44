/*
* Fundamentals
! 1.1 variable(let, const) three types of variables
! 1.2 conditions(<, >, ===, !==, <=, >=), &&, ||, if-else, else if
! 1.3 array: declare, length, index, push, pop, indexOf, includes
! 1.4 for loop, while
! 1.5 function, return, parameter
! 1.6 Object, properties, including array, Object

* -----------------------------*
* ES6
! 1. Template string ${}
! 2. spread (...)
! 2.1 copy an array then add a new element to an array
! 2.1 use filter to remove an element from an array
! 3. Arrow function
! 3.1 no parameter ()
! 3.2 single parameter
! 3.3 multiple parameters ()
! 3.4 multi-line 
! 4. destructuring: object and array destructuring
! 5. Object declaration shorthand
! 6. function parameter default value
! 7. Optional chaining ?.

*------------------------------*

* Browser API
! 1. Local storage session storage
! 2. Location API
! 3. History API
! 4. fetch

*------------------------------*

* Others
! 1. Array: map, forEach, filter, find
! 2. Ternary operator
! 3. Logical and logical or (&&, ||)
! 4. JSON(stringify, parse)
! 5. +, ''
*/

const x = 50;
const y = 100;
const obj = {
    x: x,
    y: y
};

//! shortcut
const obj1 ={x, y}
const name = 'Evo';
const area = 'badda'

const student ={
    name: name,
    area: area
}

const student2 = {name, area};