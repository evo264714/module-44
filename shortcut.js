//! 'almas', 5, true, {}, [] 
//! '', 0, false, null, undefined

//! check truthy
let myVar = 5;

//! check any truthy
if(myVar){
    myVar = myVar * 100;
}
else{
    myVar = 0;
}

let myMoney = 50;
//! Check negative or falsy anything
if(!myMoney){

}

const money = 80;
let food;
if(money > 100){
    food = 'biriyani';
}
else{
    food = 'cha'
}

//! ternary
let food1 = money > 100 ? 'biryani' : 'cha'
// console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'water'
// console.log(drink);

//! number to string conversion
const num1 = 52;
// console.log(num1);
const numStr = num1 + '';
// console.log(numStr);

//! string to number conversion
const input = '560';
const inputNum = +input;
// console.log(inputNum);

//! 
let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
// isActive? showUser() : hideUser();
//! Use && if the left side is true then right side will be executed
isActive && showUser();

//! use || if the left side is false the right side will be executed
isActive || hideUser();

//! toggle boolean
isActive = !isActive;