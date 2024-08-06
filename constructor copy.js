class Person {
   constructor(firstName, lastName) {
       this.firstName = firstName;
       this.lastName = lastName;
       this.age = 25; // Instance variable age
   }

   // Getter for location property
   get location() {
       return "USA";
   }

   // Method to get full name
   fullName() {
       return this.firstName + " " + this.lastName;
   }
}

// Create an instance of Person
let person = new Person("David", "Tim");

// Access properties and methods
console.log(person.age); // Output: 25
console.log(person.location); // Output: USA
console.log(person.fullName()); // Output: David Tim
