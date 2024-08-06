//Object is collection of properties
// person is object
let person =
{
   // properties (it always define in Key value, Keys is string and value can be any datatype)
   firstName : 'Time',
   lastName  : 'Joe',
   age : 24,
}
// to access the properties by using the objec
//object.properties
console.log(person.lastName);

//access array annoatation
console.log(person['lastName']);


// to change the property value
//object.property = 'value'
person.firstName = 'John'
console.log(person.firstName)
console.log(person)

//TO add new property which is not define inside the object
//object.newproperty ='value'
person.gender = 'male'
console.log(person)

//To delete the property
//delete object.property
delete person.gender
console.log(person)

//To check property is exits in object
//'property' in object (pass the proerty in string)
console.log('gender' in person);

//To print the value of all property we will iterate the porpety value by using the for loop

for (let key in person)
   {
      console.log(person[key])
   }

// to concatenate the first name and last name 
// property also take function

var person1 =
{
   // properties (it always define in Key value, Keys is string and value can be any datatype)
   firstName : 'Time',
   lastName  : 'Joe',
   age : 24,
    fullName: function () 
    {
         // to call the own object property we used (this) keyword
         console.log(this.firstName + this.lastName)
    }
}
console.log(person1.fullName())