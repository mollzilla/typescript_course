const person = {
  name: 'mili',
  age: 37,
};

// console.log(person.hey, typeof person) // person is not type person. What it shows in the error is the type shape object types describe the shape of an object

// const person: { // Esto es el Object Type, pero no key value, sino key type
//   name: string;
//   age: number;
// }

const person2: object = {
  name: 'mili',
  age: 37,
};

// console.log(person2.name)
// if I type it as object, it will still throw an error but not show the type. In fact, properpties that do exist in the type will also throw error  because we only told typescript tht it is an object, but nothing else.

console.log(person.age); // if I don't type it as a person, it will offer me support as I write inferring the properties that exist.

// Arrays
const person3: {
  // best to let ts infer?s
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa;
} = {
  name: 'mili',
  age: 37,
  hobbies: ['cooking', 'cookies'],
  role: [4, 'junior'], // array of exacty two elements, where the first is an number identifier and the second a string identifier
};

// Si sabe que es string Array, infiere el tipo y te da los metodos de string, y no me deja usar los de otro tipo

// console.log(Math.round(person3.hobbies[1])); // Argument of type 'string' is not assignable to parameter of type 'number'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let favoriteActivities: any[]; // of course not recommended
favoriteActivities = ['sports', 6];
favoriteActivities = ['sports', 7];

// for( const hobby of person3.hobbies) { // inferred it was a string, won't let me use Math
// console.log(Math.floor(hobby))
// }

console.log(person3.hobbies);

// TUPLE TYPE : fixed length and fixed type array

// UNIONS or | and &
// (string | number)[] is an array that might hold either a number or a string

const miliTuple = [1, 'mili'];

person3.role.push('third'); // we can say this bc typescript only knows so far that it can be either one or the other, but not the length or the order

const personTuple: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // this marks a tuple
} = {
  name: 'mili',
  age: 37,
  hobbies: ['cooking', 'cookies'],
  role: [4, 'junior'], // array of exacty two elements, where the first is an number identifier and the second a string identifier
};

personTuple.role.push('mili'); // push won't trigger the error (exception)
// personTuple.role[1] = 3; // it won't work because it's expecting a string

// personTuple.role = [] // length indeed will be enforced if we set it with assign to string though

// Global constants or identifiers = Enum

enum Age { // assigns numbers to labels
  NEW,
  OLD,
  AVERAGE = 6, // other identifiers will pick up after that.
  READER = 'mili',
} // only in ts, not js. they are translated into numbers with a readable name
const personEnum: {
  name: string;
  role: Age;
} = {
  name: 'mili',
  role: Age.NEW, // I get the support
};

// Last core type: Any

// AVOID ANY, DEFEATS THE PURPOSE
console.log(person, person2, person3, miliTuple, favoriteActivities, personEnum);
