// FUNCTIONS
// function add(n1: number, n2: number) { // TS infers the return type
//   return n1 + n2;
// }
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result = ' + num);
}
printResult(add(2, 3));
