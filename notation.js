const person ={
    name: 'Evo',
    profession: 'student',
    age: 23,
    25: 'summer',
    'son-name': 'sunny',
    address: 'badda'
}

//! dot notation 
const prof1 = person.profession;

//! bracket notation
const prof2 = person['profession'];
const pName = 'profession';
const prof3 = person[pName];
// console.log(prof3);

const season = person[25];
// console.log(season);

const son = person['son-name'];
console.log(son);