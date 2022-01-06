"use strict";
function fAdd(n1, n2) {
    // best to let TS to do its job
    return n1 + n2;
}
console.log(fAdd(1, 2));
function fPrintResult(num) {
    // apparently it doesn't infer it as the video had said
    // TS infers it, TS doesn't know of it
    console.log('result', num);
}
fPrintResult(fAdd(2, 3));
console.log(fPrintResult(fAdd(2, 3)));
// undefined is a valid Type in TS, for an unasigned variable. But the return of a function cannot be undefined. Should use void.
// function fPrintResult2(num): undefined {
//   // TS infers it, JS doesn't know of it
//   console.log('result', num);
// }
function ffPrintResult2(num) {
    // this is valid. Rarely used, maybe to clarify a function that returns;. void is also valid
    console.log('result', num);
    return;
}
ffPrintResult2(2);
// FUNCTION TYPE
var combinedValues;
combinedValues = ffPrintResult2; // this is any
combinedValues = ffPrintResult2; // this is any
// combinedValues = 1;
combinedValues(8);
// combinedValues(true); // this is still any, will compile but return error bc of line 37 -- DOESN'T COMPILE
// This is with Function Type
// eslint-disable-next-line @typescript-eslint/ban-types
var combinedValuesM;
// combinedValues2 = 1; // Now this will throw err and not compile because Type 'number' is not assignable to type 'Function'.
combinedValuesM = ffPrintResult2; // this is Function
combinedValuesM = fAdd; // this is Fuction
console.log(combinedValuesM(8));
// console.log(combinedValuesM(true)); DOESN'T COMPILE LA CDSM
console.log(combinedValuesM('mili')); // all of these will work but return NaN or undefined. Bc we only told Ts that it will be a function but not how
var combinedTYpeFunction = fAdd;
combinedTYpeFunction = fAdd;
combinedTYpeFunction(2, 3);
// combinedTYpeFunction = combinedValuesM; // Function is not the same as the typed function: Type 'Function' provides no match for the signature '(a: number, b: number): number'.
// FUNCTION TYPES AND CALLBACKS
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
// sums number and executes cb on that  callback
addAndHandle(22, 33, function (result) {
    // TS knows that result will be number bc we told it so in the function declaration
    console.log(result);
});
// addAndHandle(22, 33, (result, mili) => {
//   // TS doesn't  want a second argument
//   console.log(result);
//   return 3; // doesn't care that the definition, just doesn't care. The cb won't do anything with the returned value.
// });
// Parameters are enforced
