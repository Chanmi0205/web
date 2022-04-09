'use strict';

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}

log('Heelo@');
log(123);


// Parametesrs
function changeName(obj) {
    obj.name = "coder";
}

const ellie = { name : 'ellie' };
changeName(ellie);
console.log(ellie); 


// Default parameters
function showMessage(message, from='unknown') {
    console.log(message, from);
}
// from을 지정 안하였을 때
showMessage('Hi!');
// from을 지정 하였을 때
showMessage('Hi!', 'chan');


// rest parameters
function printAll(...args) {
    for ( let i=0; i<args.length; i++ ) {
        console.log(args[i]);
    }
}
printAll('안녕하세요.', '반갑습니다.', '다음에 또 만나요!');


// Local scope
let globaMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globaMessage);
}
printMessage();


// Early return, early exit

// bad
// function upgradeUser(user) {
//  if ( user.point> 10 ) {
//      long upgrade logic...  
//  }   
// }

// good
// function upgradeUser(user) {
//  if ( user.point<= 10 ) {
//      return;      
//  } 
//  long upgrade logic...  
// }

function randomQuiz(answer, printYes, printNo) {
    if ( answer === 'love you' ) {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function() {
    console.log('Yes');
}


//named function
const printNo = function print() {
    console.log('no!');
    print();
} 

// randomQuiz('wrong', printYes, printNo);
// randomQuiz('love you', printYes, printNo);

const add = (a, b) => a + b;

// IIFE - 함수를 바로 사용하고 싶을 때
(function hello() {
    console.log('ITFE');
})();
