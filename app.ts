// Intersections
// type guards
// discriminated unions
// type casting
// function overloads

/* ******** */

// INTERSECTION TYPES

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = { name: 'mili', privileges: ['none'], startDate: new Date() };

console.log(e1);

// This is what it would look like with interfaces

interface Admin2 {
  name: string;
  privileges: string[];
}

interface Employee2 {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee2 extends Admin2, Employee2 {}

const e2: ElevatedEmployee2 = { name: 'mili', privileges: ['none'], startDate: new Date() };

console.log(e2);

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // Ts sabe que la unica interseccion es number

const miliun: Universal = 3;

console.log(miliun);

// En unions, ( | ) lo que tienen en comun, en object types, la combinacion de todas las props de los obj

/**** ***** */
// TYPE GUARDS

function addTG(a: Combinable, b: Combinable) {
  // typeguard de typeof
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

console.log(addTG(1, 2));
console.log(addTG('2', '3'));

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('name', emp.name);
  // typeguard de in
  if ('privileges' in emp) {
    console.log(emp.privileges);
  }
}

printEmployeeInformation(e2);

// instanceof solo sirve para clases
class Car {
  drive() {
    console.log('driving');
  }
}

class Truck {
  drive() {
    console.log('driving');
  }

  load(cargo: number) {
    console.log('loading' + cargo);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function driveVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.load(3);
  }
}

driveVehicle(v1);
driveVehicle(v2);

// No sirve para los tipos, malisimo
// type Flor {
//   color: String
// }

// const printFlor(flor) {
//   if(flor instanceof Flor) {
//     console.log("vale")
//   }
// }

// ------- //

// DISCRIMINATED UNIONS

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}
interface Horse {
  type: 'horse'; // LITERAL TYPE, NOT A NUMBER
  runningSpeed: number;
}

type Animal = Horse | Bird;

function moveAnimal(animal: Animal) {
  switch (animal.type) {
    case 'bird': // I GET AUTOCOMPLETE AWESOME
      console.log('flying at ' + animal.flyingSpeed);
      break;
    case 'horse':
      console.log('running at' + animal.runningSpeed);
      break;
  }
}

const llanten: Horse = {
  // tengo que aclarar el tipo, porque la string horse de aca no es lo mismo que el literal horse  de alla
  type: 'horse',
  runningSpeed: 65,
};

moveAnimal(llanten);

// SIrve igual con los tipos
type Bird2 = {
  type: 'bird';
  flyingSpeed: number;
};
type Horse2 = {
  type: 'horse';
  runningSpeed: number;
};

type Animal2 = Bird2 | Horse2;

function moveAnimal2(animal: Animal2) {
  switch (animal.type) {
    case 'bird': // I GET AUTOCOMPLETE AWESOME
      console.log('flying at ' + animal.flyingSpeed);
      break;
    case 'horse':
      console.log('running at' + animal.runningSpeed);
      break;
  }
}
const bluebird: Bird2 = {
  type: 'bird',
  flyingSpeed: 50,
};

moveAnimal2(bluebird);

const parag = document.getElementById('unico')!; // Para ts puede ser null o un elemento cualquiera - el ! le dice que no va a ser nunca null
parag.innerHTML = 'hola';
// parag.value = 'mili'; // como lo asume n elemento no necesariamente tiene value

const parag3 = <HTMLInputElement>document.getElementById('unico')!; // Para ts puede ser null o un elemento cualquiera

parag3.value = 'hola tipo';

const parag4 = document.getElementById('unico2')! as HTMLInputElement; // Para ts puede ser null o un elemento cualquiera

parag4.value = 'hola tipo este es con as';

const parag5 = document.getElementById('unico3');

// sin el !, type guard

if (parag5) {
  (parag5 as HTMLInputElement).value = 'Este es el value con type guard';
}
