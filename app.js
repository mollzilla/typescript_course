"use strict";
// Intersections
// type guards
// discriminated unions
// type casting
// function overloads
var e1 = { name: 'mili', privileges: ['none'], startDate: new Date() };
console.log(e1);
var e2 = { name: 'mili', privileges: ['none'], startDate: new Date() };
console.log(e2);
var miliun = 3;
console.log(miliun);
// En unions, ( | ) lo que tienen en comun, en object types, la combinacion de todas las props de los obj
/**** ***** */
// TYPE GUARDS
function addTG(a, b) {
    // typeguard de typeof
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(addTG(1, 2));
console.log(addTG('2', '3'));
function printEmployeeInformation(emp) {
    console.log('name', emp.name);
    // typeguard de in
    if ('privileges' in emp) {
        console.log(emp.privileges);
    }
}
printEmployeeInformation(e2);
// instanceof solo sirve para clases
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('driving');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('driving');
    };
    Truck.prototype.load = function (cargo) {
        console.log('loading' + cargo);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function driveVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.load(3);
    }
}
driveVehicle(v1);
driveVehicle(v2);
function moveAnimal(animal) {
    switch (animal.type) {
        case 'bird': // I GET AUTOCOMPLETE AWESOME
            console.log('flying at ' + animal.flyingSpeed);
            break;
        case 'horse':
            console.log('running at' + animal.runningSpeed);
            break;
    }
}
var llanten = {
    // tengo que aclarar el tipo, porque la string horse de aca no es lo mismo que el literal horse  de alla
    type: 'horse',
    runningSpeed: 65,
};
moveAnimal(llanten);
function moveAnimal2(animal) {
    switch (animal.type) {
        case 'bird': // I GET AUTOCOMPLETE AWESOME
            console.log('flying at ' + animal.flyingSpeed);
            break;
        case 'horse':
            console.log('running at' + animal.runningSpeed);
            break;
    }
}
var bluebird = {
    type: 'bird',
    flyingSpeed: 50,
};
moveAnimal2(bluebird);
var parag = document.getElementById('unico'); // Para ts puede ser null o un elemento cualquiera - el ! le dice que no va a ser nunca null
parag.innerHTML = 'hola';
// parag.value = 'mili'; // como lo asume n elemento no necesariamente tiene value
var parag3 = document.getElementById('unico'); // Para ts puede ser null o un elemento cualquiera
parag3.value = 'hola tipo';
var parag4 = document.getElementById('unico2'); // Para ts puede ser null o un elemento cualquiera
parag4.value = 'hola tipo este es con as';
var parag5 = document.getElementById('unico3');
// sin el !, type guard
if (parag5) {
    parag5.value = 'Este es el value con type guard';
}
