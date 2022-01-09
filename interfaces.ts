type PersonType = {
  name: string;
  age: number;
};

const u1ser1: PersonType = {
  name: 'Mili',
  age: 37,
};

console.log(u1ser1);
interface Person {
  // interface belongs to TS, not js
  // define what an object should look like, not a blueprint but a type
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  // wtf
  name: 'Mili',
  age: 37,
  greet(phrase: string) {
    console.log('Hi ' + phrase);
  },
};

user1.greet('How are you');

/* diff with object type, in custom types I can also add unions, etc. Interface is more strict AND ALSO CLASSES CAN IMPLEMENT */

interface Named {
  name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  // could extend more separated by a comma
  readonly husband: string;
  greet(phrase: string): void;
}

let user2: Greetable;

user2 = {
  name: 'mili',
  greet: (phrase) => console.log(phrase),
  husband: 'angel',
};

user2.greet('hi');

class Person2 implements Greetable {
  name?: string;
  age: number; // stuff inexistent on greetable as well
  husband: string;
  constructor(age: number, h: string, n?: string) {
    if (n) {
      this.name = n;
    }
    this.age = age;
    this.husband = h;
  }

  greet(phrase: string) {
    console.log('hi' + phrase);
  }
} // can inherit one class, can implement several interfaces with comma

const mili200 = new Person2(37, 'angel', 'mili');
const mili201 = new Person2(37, 'angel');

console.log(mili200.name);
console.log(mili201.name);

// GREETABLE ENFORCES STRUCTURE

// user2.husband = 'Angelito'; // throw err cannot reassign
