"use strict";
var userInput;
var userNameN;
userInput = 2;
userInput = 'Mili';
console.log(userInput);
// userName = userInput; // unknown does not guarrantee it's a string. FAILS
var userInput2 = 'mili';
userInput2 = 'mili';
userInput = userInput2; // doesn't care
if (typeof userInput === 'string') {
    userNameN = userInput; // can check. In know what I want to do eventually but I don't know wjat I'm going to get yet.
    console.log(userNameN);
}
// THE NEVER TYPE - another type that functions can return.
function generateError(message, code) {
    // it could be void bc it return nothing.
    throw { message: message, errorCode: code };
}
generateError('oh no error', 400);
console.log(generateError('oh no error', 400)); // this crashes the script, it will never return a value.
function generateError2(message, code) {
    // will infer void but can specify never
    // it could be void bc it return nothing.
    throw { message: message, errorCode: code };
}
// if i had an infinite while it would be also never
generateError2('oh no error', 400);
