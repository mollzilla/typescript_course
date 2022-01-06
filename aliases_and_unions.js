"use strict";
// UNION TYPES
// fine with either one value or other
function addCombinedtypes(input1, input2) {
    // runtime checks might be necessary when unions
    // ts sees the union but not what's inside the union, only that a union exists, it will complain
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedVar = addCombinedtypes(30, 20);
var combinedNames = addCombinedtypes('mili', 'rey');
console.log(combinedVar, combinedNames);
// LITERAL types
// IN LITERALS not only say the type, but also the value.
var number = 8; // this is of type 8, not of type number
console.log(number);
function addWithLiterals(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'as-number') {
        return +result;
    }
    else {
        return result.toString();
    }
}
var combinedNamesL = addWithLiterals('0', '2', 'as-number');
var combinedNamesLString = addWithLiterals('0', '2', 'as-string');
console.log(combinedNamesL, combinedNamesLString);
var miliT = 'mili';
console.log(miliT);
