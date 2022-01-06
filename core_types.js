"use strict";
var person = {
    name: 'mili',
    age: 37,
};
// console.log(person.hey, typeof person) // person is not type person. What it shows in the error is the type shape object types describe the shape of an object
// const person: { // Esto es el Object Type, pero no key value, sino key type
//   name: string;
//   age: number;
// }
var person2 = {
    name: 'mili',
    age: 37,
};
// console.log(person2.name)
// if I type it as object, it will still throw an error but not show the type. In fact, properpties that do exist in the type will also throw error  because we only told typescript tht it is an object, but nothing else.
console.log(person.age); // if I don't type it as a person, it will offer me support as I write inferring the properties that exist.
// Arrays
var person3 = {
    name: 'mili',
    age: 37,
    hobbies: ['cooking', 'cookies'],
    role: [4, 'junior'],
};
// Si sabe que es string Array, infiere el tipo y te da los metodos de string, y no me deja usar los de otro tipo
// console.log(Math.round(person3.hobbies[1])); // Argument of type 'string' is not assignable to parameter of type 'number'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var favoriteActivities; // of course not recommended
favoriteActivities = ['sports', 6];
favoriteActivities = ['sports', 7];
// for( const hobby of person3.hobbies) { // inferred it was a string, won't let me use Math
// console.log(Math.floor(hobby))
// }
console.log(person3.hobbies);
// TUPLE TYPE : fixed length and fixed type array
// UNIONS or | and &
// (string | number)[] is an array that might hold either a number or a string
var miliTuple = [1, 'mili'];
person3.role.push('third'); // we can say this bc typescript only knows so far that it can be either one or the other, but not the length or the order
var personTuple = {
    name: 'mili',
    age: 37,
    hobbies: ['cooking', 'cookies'],
    role: [4, 'junior'],
};
personTuple.role.push('mili'); // push won't trigger the error (exception)
// personTuple.role[1] = 3; // it won't work because it's expecting a string
// personTuple.role = [] // length indeed will be enforced if we set it with assign to string though
// Global constants or identifiers = Enum
var Age;
(function (Age) {
    Age[Age["NEW"] = 0] = "NEW";
    Age[Age["OLD"] = 1] = "OLD";
    Age[Age["AVERAGE"] = 6] = "AVERAGE";
    Age["READER"] = "mili";
})(Age || (Age = {})); // only in ts, not js. they are translated into numbers with a readable name
var personEnum = {
    name: 'mili',
    role: Age.NEW,
};
// Last core type: Any
// AVOID ANY, DEFEATS THE PURPOSE
console.log(person, person2, person3, miliTuple, favoriteActivities, personEnum);
