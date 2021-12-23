// UNION TYPES

// fine with either one value or other
function addCombinedtypes(input1: number | string, input2: number | string) { // ts sees the union but not what's inside, it will complain
let result;
if(typeof input1 ==='number' && typeof input2=== 'number') { // runtime checks will be necessary when unions
    result = input1 + input2;
} else {
  result = input1.toString() + input2.toString()
}
return result
}
const combinedVar =  addCombinedtypes(30, 20);

const combinedNames = addCombinedtypes("mili", 'rey')


console.log(combinedVar, combinedNames)

// LITERAL types

// IN LITERALS not only say the type, but also the value.

const number = 8; // this is of type 8, not of type number


function addWithLiterals(input1: number | string, input2: number | string, resultConversion: AsWhat) {
let result;
if(typeof input1 ==='number' && typeof input2=== 'number') {
    result = input1 + input2;
} else {
  result = input1.toString() + input2.toString()
}
if(resultConversion==='as-number') {
  return +result
} else {
return result.toString()}
}

const combinedNamesL = addWithLiterals("0", '2', 'as-number')
const combinedNamesLString = addWithLiterals("0", '2', 'as-string')

console.log(combinedNamesL, combinedNamesLString)



// TYPE ALIASES

type Mili = string | number; // type reserved word of ts, not js. not title types with reserved words.
type AsWhat = 'as-number' | 'as-string'

