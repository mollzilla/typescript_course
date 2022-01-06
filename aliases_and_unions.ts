// UNION TYPES

// fine with either one value or other
function addCombinedtypes(input1: number | string, input2: number | string) {
  // runtime checks might be necessary when unions
  // ts sees the union but not what's inside the union, only that a union exists, it will complain
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
const combinedVar = addCombinedtypes(30, 20);

const combinedNames = addCombinedtypes('mili', 'rey');

console.log(combinedVar, combinedNames);

// LITERAL types

// IN LITERALS not only say the type, but also the value.

const number = 8; // this is of type 8, not of type number
console.log(number);

function addWithLiterals(input1: number | string, input2: number | string, resultConversion: AsWhat) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultConversion === 'as-number') {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedNamesL = addWithLiterals('0', '2', 'as-number');
const combinedNamesLString = addWithLiterals('0', '2', 'as-string');

console.log(combinedNamesL, combinedNamesLString);

// TYPE ALIASES

type Mili = string | number; // type reserved word of ts, not js. not title types with reserved words.
const miliT: Mili = 'mili';
console.log(miliT);

type AsWhat = 'as-number' | 'as-string';
