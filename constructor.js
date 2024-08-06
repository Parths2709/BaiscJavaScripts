class Person 
{
   age = 25
   get location()
   {
      return "USA"
   }
}

constructor(firstName, lastName)
//when we declare any property in constructor this is call instance variable
{
   this.firstName = firstName;
   this.lastName = lastName;

}
//method
fullName()
{
   console.log(this.firstName + this.lastName)
}

//create the object of class
// this value are call inside the constructor
let person = new Person("David", "Tim")
console.log(person.age)
console.log(person.location)
// to access fullname method
console.log(person.fullName());