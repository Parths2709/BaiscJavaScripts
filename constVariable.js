//The const keyword in JavaScript is used to declare variables that should remain constant, meaning their value cannot be reassigned after declaration

const PI = 3.14;
console.log(PI); // Output: 3.14

// Attempting to reassign a const variable will result in an error
//PI = 3.14159; // Throws TypeError: Assignment to constant variable.

// However, note that const allows mutation for objects and arrays
const person = { name: 'John', age: 30 };
person.age = 31; // This is allowed
console.log(person); // Output: { name: 'John', age: 31 }

// But you cannot reassign the object itself
person = { name: 'Jane', age: 25 }; // Throws TypeError: Assignment to constant variable.