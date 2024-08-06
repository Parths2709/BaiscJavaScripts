//13. Write a JavaScript program to swap two numbers.
let a = 15;
let b = 25;
let c = a; // c= 15
// update value of a to b
 a = b; // a = 25
// // update the value of b to c
b = c; //b = 15

console.log("after swap value of a " +(a));
console.log("after swap value of b " + (b));

//14. Write a JavaScript program to swap two numbers without using a third variable.
let a1 = 30;
let b1 = 40;
// update the value b1 to a1
b1 = a1 // b1 = 30
a1 = 40;

console.log(a1)
console.log(b1)

//55) Write a program to swap two strings without using temp or third variable?

let firstName = "parth";
let lastName = "shah";

// lastName = firstName; // lastName = parth
// firstName = "shah"

[firstName, lastName] = [lastName, firstName]

console.log(firstName)
console.log(lastName);


//15. Write a JavaScript program to add two numbers.

let a2 = 55;
let b2 = 105;

console.log("addition of two number " + (a2+b2));

// 16. Write a JavaScript program to find the largest number.

const number = [15, 20, 53, 40, 85]
function largestnum() {

    let largest = number[0];
    for (let i=1; i<number.length; i++) {
        if (number[i] > largest) {
            largest = number[i];
        }
    }
    console.log("Largest number is ", largest)
}
largestnum();

//17. Write a JavaScript program to demonstrate an if...else statement.

function checkdrivingage (drivingage) {
    if (drivingage > 18){
        console.log("Eligibile for DL");
    }else {
        console.log("Not eligible for DL");
    }
}
checkdrivingage(15)
//18. Write a JavaScript program to demonstrate nested if...else if... statement.. without function
// 1st if hrs btw 6am to 12 pm = gm
// 2nd if hrs btw 12 pm to 5 pm = ga
// 3rd if no condition then GE
let hrs = 0;
if (hrs > 6 && hrs <=12) {
    console.log("Good Morning")
}else if (hrs > 12 && hrs <18) {
    console.log("Good afternoon")
}else {
    console.log("Good Evening")
}

//18. Write a JavaScript program to demonstrate nested if...else if... statement.. with function
 
function assigncartype (Cartype) {
    if (Cartype === "sedan") {
        car = "Dzire";
    }else if (Cartype === "SUV"){
        car = "Tata"
    }else if (Cartype === "Pick up van") {
        car = "Eco"
    }else{
        car = "No car found"
    }
    console.log(`Your car type is:" ${car}`)
}
assigncartype("Pick up van")

//19. Write a JavaScript program to demonstrate nested if...else statement.

let x = 25;
let y = 35; 

if(x > y) {
    console.log("X is greater than Y")
}else {
    if (x < y) {
        console.log("X is less than Y")
    } else {
        console.log("X is Equal to Y")
    }
}

//22. Write a JavaScript program to demonstrate a for loop.

for (let i = 0; i<=5; i++) {
    console.log(i)
}

//20. Write a JavaScript program to find odd and even numbers.
for (let i = 0; i<=10; i++) {
    if (i % 2 !==0) {
        console.log("For Loop -- Odd Number " , i)
    } else  {
        console.log("For Loop -- Even Number " , i)
    }
}
//24. Write a JavaScript program to demonstrate a while loop.to check odd number

let i = 0;
while (i<=5){
    if (i % 2 !==0) {
        console.log("While Loop -- Print Odd Number ", i)
    }
    i++;
}

// While

let  k = 0
while(k<=5){
    console.log("while condition",k);
    k++
}

// Do while

let j = 0;
do {
    if (j % 2 !==0) {
        console.log("Do While loop --- Print odd number", j)

    }
    j++
}   while(j<=5);

//25. Write a JavaScript program to print the entered number in reverse.

for (let i = 5; i>=0; i--){
    console.log("for loop -- entered number in reverse order", i)
}

//26. Write a JavaScript program to demonstrate the usage of a break statement inside a while loop.
  let p = 0;
  while(p<=8) {
    // if (p === 4) {
    //     break;
    // }
    console.log("Using the break statement in While" ,p)
    p++;
  } 

  // 23. Write a JavaScript program to print stars using a for loop, 
  //where the number of stars printed should be equal to the row number.

  function star(rows) {
    for (let row = 1; row <=rows; row++) {
        let pattern = '';
        for (let i=0; i<row; i++)
            pattern += '*';
        console.log(pattern);
    }
  }
  star(5)

  //21. Write a JavaScript program to compare two strings.

  let string1 = "hello"
  let string2 = "hello"
  if (string1 === string2) {
    console.log("Two string are different")
  }else {
    console.log("Two string are same")
  }

  //61.JavaScript Program to Print All Prime Numbers in an Interval

  function showPrimes(limit) {
    for (let number=2; number<=limit ; number++) {
        
        let isPrime = true;
        for (let factor=2; factor< number; factor++) {
            if(number % factor === 0) {
                isPrime = false;
                break;
            } 
        }

        if(isPrime) console.log(number);
    }
  }
  showPrimes(20);

  //1. How do you iterate over an array in JavaScript?

  let array = [1,2,3,4,5]
  for (i=1; i<=array.length; i++) {
    console.log("Print the value of ", i)
  }

  //38. How to check if an array contains a specific value?
  let myArray = [1,2,3,4,5,'test',10]
  let value = 10;
   if (myArray.includes(value)) {
    console.log("specific value "+ value + " is present in array")
   }else {
    console.log("specific value " + value + " is not present in array")
   }

   //39. How to check if two arrays are equal?

   let myArray1 = [1,2,3,4,5]
   let myArray2 = [1,2,3,4,6]

   //console.log("Print the value of index:", myArray1.indexOf(9));

   function checkTwoArray (array1, array2) {
    if (array1.length !== array2.length) {
        console.log("Arrays are not equal: They have different lengths.")
    }

    for (let i = 0 ; i<array1.length; i++) {
        if (array1[i] !== array2[i]) {
            console.log("Arrat are not same: they differe at index", i)
            break;
        }
    } 
        console.log("Array are same")
    }
   checkTwoArray(myArray1, myArray2)

//33. Write a JavaScript program to print Floyd’s triangle.

   function flyogtriangle(rows){
    let num =1;
    for(let i=1;i<=rows; i++) {
        let row = '';
        for (let j=1; j<=i; j++) {
            row += num + '';
            num++;
        }
        console.log(row)
    }
   }
   flyogtriangle(5)

   