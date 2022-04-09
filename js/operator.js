'use strict';

// String concatenation
console.log('my' + ' cat');
console.log('1', 2);

console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(1 % 1); // remainder
console.log(1 ** 1); // exponentiation

// Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(counter, preIncrement);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log('counter : ', counter, 'postIncrement', postIncrement);


// Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;


// Compearison operators
// <, <=, >, >=


// Logical operators || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

console.log(value1 || value2); // 둘 중 하나가 참이여도 참
console.log(value1 && value2); // 둘 다 참이면 참, 하나라도 거짓이면 거짓 


// value1의 값을 반대로 바꿔줌. true => false, false => true
console.log(!value1); 


// Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, 타입이 다르면 false로 나옴
console.log(stringFive === numberFive);

// object equaluty by reference
const ellie1 = { name: 'ellie'};
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// if, else if, else

const name4 = 'coder';
if ( name4 === 'ellie' ) {
    console.log('Welcome, Ellie!');
} else if ( name4 === 'coder' ) {
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}

// Ternary operator : ?
// condition ? value1 : value2;
console.log(name4 === 'ellie' ? 'yes' : 'no');


// switch
const browser = 'IE';
switch (browser)  {
    case 'IE':
        console.log('go away!');
    break;
    case 'Chrome':
    case 'FireFox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}


//Loops

// while
let i = 3;
while ( i > 0 ) {
    console.log('while: ', i);
    i--;
}

// do while
do {
    console.log('do while: ', i);
    i--;
} while ( i > 0 );

// for | for(begin; condition; step)
for ( i=3; i>0; i--) {
    console.log('for: ', i);
}

//nested loops
for ( let i=0; i<10; i++ ) {
    for ( let j=0; j<10; j++ ) {
        console.log('i: ', i, 'j: ',j);
    }
}