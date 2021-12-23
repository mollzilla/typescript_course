// FUNCTIONS
// function add(n1: number, n2: number) { // TS infers the return type
//   return n1 + n2;
// }
function add(n1, n2) {
    // can specify explicitly the type but best let TS infer it. Will complain if I specify string bc it does not make sense
    return n1 + n2;
}
// VOID
function printResult(num) {
    // this does not return anything, therefore void. No need to specify, TS infers
    console.log('Result = ' + num);
}
printResult(add(2, 3));
// if we do console.log a function that does not return, it will return  undefined. But function returnc cannot be of type undefined. TS would expect a return; but not not return at all.
function acceptUndefinedReturn() {
    return; // this is actually to return undefined, but it can be confusing because if we console.log printresult we would also get undefined
}
// But if I put void there it would accept it and it's actually what should be done.
// If we store a function in a vvaiable, and then redeclare interface, if its any TS won't complain and we'll  geta runtime error whentrying to execute a non funtion
var containFunction;
containFunction = printResult;
// but I could store any function and it could return wrong values if I redeclare it
