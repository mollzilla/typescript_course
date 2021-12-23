console.log("hi there lite server");

function add(n1: number, n2: number, printy: boolean, phrase: string) {
  if(printy) {
    const result = n1 + n2
    console.log(phrase + result);
  }
  else {
    return n1 + n2;
  }
}

// not considered a good practice, only would work and be useful when not value assigned to variable
let number1: number = 5;
const number2 = 5;

number1 = 0
console.log(typeof number1)


const printResult = true;
const phrase = "hey there "
add(number1, number2, printResult, phrase)

let mili: null;

console.log(mili)

console.log(typeof 0)

