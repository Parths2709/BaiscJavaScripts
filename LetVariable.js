//let- is a keyword introduced in ES6 (ECMAScript 2015) for declaring variables. It has block scope, which means it's limited to the block in which it's declared. Once declared, it can be updated, meaning its value can be changed, but it cannot be re-declared within the same scope.
/*1.Block Scope: Variables declared with "let" are scoped to the block (enclosed by {}) in which they are defined. This means they are accessible only within that block and any nested blocks.*/
{
let time = 25;
console.log(time)
}

//console.log(time) // get error message "time is not defined"

//2.Can be updated: You can change the value of a variable declared with let.

let x = 55
x = 85
console.log(x)

//3.Cannot be re-declared: You cannot declare another variable with the same name using let within the same block scope.*/
let z = 30
console.log(z)

/*let z = 40
console.log(z)*/

//4.You cannot declare another variable with the same name using let within the same block scope
let flag = "hey java scrips"
if (true){
    var flag1 = "if condition call"
}
console.log(flag)
//---------------------------------------------------------------------------------------
//var: Allows reinitialization and re-declaration within the same scope.
//E.g
/// Define a variable using var and initialize it
var p = 5;
console.log("Initial value of x:", p); // Output: Initial value of x: 5

// Reinitialize the variable x
p = 10;
console.log("Updated value of x:", p); // Output: Updated value of x: 10

// Re-declare the variable x in the same scope
var p = 15;
console.log("Re-declared value of x:", p); // Output: Re-declared value of x: 15

//redeclaring a variable with var in the same scope can lead to unexpected behavior or loss of the previous value.
var flage = "hey java scrips"
if (true){
    var flage = "if condition call"
}
console.log(flag)

/*Summary:
var: Allows reinitialization and re-declaration within the same scope.
let: Allows reinitialization but not re-declaration within the same block scope.
const: Does not allow reassignment after declaration.*/




