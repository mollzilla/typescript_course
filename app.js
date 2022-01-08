"use strict";
var u1ser1 = {
    name: 'Mili',
    age: 37,
};
console.log(u1ser1);
var user1;
user1 = {
    // wtf
    name: 'Mili',
    age: 37,
    greet: function (phrase) {
        console.log('Hi ' + phrase);
    },
};
user1.greet('How are you');
var user2;
user2 = {
    name: 'mili',
    greet: function (phrase) { return console.log(phrase); },
    husband: 'angel',
};
user2.greet('hi');
var Person2 = /** @class */ (function () {
    function Person2(n, age, h) {
        this.name = n;
        this.age = age;
        this.husband = h;
    }
    Person2.prototype.greet = function (phrase) {
        console.log('hi' + phrase);
    };
    return Person2;
}()); // can inherit one class, can implement several interfaces with comma
var mili200 = new Person2('mili', 37, 'angel');
console.log(mili200.name);
// GREETABLE ENFORCES STRUCTURE
// user2.husband = 'Angelito'; // throw err cannot reassign
