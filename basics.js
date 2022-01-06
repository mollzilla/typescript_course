"use strict";
console.log('hi there lite server');
function add(n1, n2, printy, phrase) {
    if (printy) {
        var result = n1 + n2;
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
// not considered a good practice, only would work and be useful when not value assigned to variable
var number1 = 5;
var number2 = 5;
number1 = 0;
console.log(typeof number1);
var printResult = true;
var phrase = 'hey there ';
add(number1, number2, printResult, phrase);
var mili2;
if (true && false) {
    console.log(mili2);
}
console.log(typeof 0);
