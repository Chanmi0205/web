'use strict';
// 2. Variable 
// (Mutable) let
    let globalName = 'global name';

    {

    let name = 'ellie';
    console.log(name);  
    name = 'hello'; ㅈ
    console.log(name); 

    }

    console.log(globalName);


// 3. Constant
// immutable date type
const test = 10;


// integer
const count = 17;
console.log('value : ', {count},);


// String
const char = 'C';
const brendan = 'brenden';


// boolean
// false : 0, true : 1
const canRead = true; // true
console.log(canRead);
const test1 = 3<1; //false
console.log(test1);


//null
let nothing = null;
console.log(nothing);

// undefined
let x;
console.log(x);

// symbol
const symbol = Symbol('id');
const symbo2 = Symbol('id');
console.log(symbol == symbo2);


// Dynamic typing
let text = 'hello';
console.log('value:', text);


// object 
const ellie = { name : 'ellie', age : 20 };
ellie.age=21;
console.log(ellie);