
// //---------------------------------------------------------------------------------------------
// //Question for Assessment:
// //1. How do you iterate over an array in JavaScript? ---- done 
 
// let array = [1,2,3]
// for (i=0; i<=3; i++) {
//     for (j=0; j<=3; j++) {
//         console.log(i +','+j)
//     }
// }
// let b = 1;
// function triangle(row) {
//     for (i=1; i<=row; i++) {
//             let a = '';
            
//         for (j=1; j<=i; j++) {
//             a = a + (b+" ");
//             b++;
//         }
//         console.log(a);
//     }
// }
// triangle(8)

 function triangle1(row) {
    let a = ''
    for (i=0; i<=row; i++) {
        a = a+i;
    }
    console.log(a);
 }
 triangle1(5)

 //1. How do you iterate over an array in JavaScript? ---- done 
 
 let array = [1,2,3,4,5]
 for (i=0; i<=5; i++) {
    console.log("Print the value of ", i)
 }

// 2. Explain the difference between a for loop, a while loop, and a do-while loop.
// 3. How would you use a for loop to iterate over the elements of an array in reverse order?

let arr = [1, 2, 3, 4, 5];

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

 let array0 = [1,2,3,4,5,6]
 for (let p = 6; p>=0; p--){
    console.log("for loop -- entered number in reverse order", p)
}


// 4. Discuss the concept of nested loops and provide an example.
// 5. How do you break out of a loop prematurely? Provide an example.
// 6. Explain the concept of loop optimization and discuss some strategies for improving loop performance.
// 7. Describe the difference between the forEach method and a traditional for loop for iterating over arrays in JavaScript.
// 8. Discuss the concept of infinite loops and how to avoid them.
// 9. Write a JavaScript program to print an integer value.
// 10. Write a JavaScript program to print the command line arguments.
// 11. Write a JavaScript program to print the input from a scanner.
// 12. Write a JavaScript program to convert from Fahrenheit to Celsius.
// 13. Write a JavaScript program to swap two numbers.
 
let a = 12;
let b = 15;

console.log("Print the value of befor the swap", a, b)

let c = b;
b = a; // update the value of b to a = 12
a= 15;
console.log("Print the value after swap", a, b);


// 14. Write a JavaScript program to swap two numbers without using a third variable.

let a1 = 40;
let b1 = 50;
console.log("Print the value befor the swap", a1, b1)
b1 = a1 // updated the value of b1 to a1 =40;
a1 = 50;
console.log("Print the value after the swap", a1, b1)

// 15. Write a JavaScript program to add two numbers.

let a2 = 50;
let b2 = 60; 
console.log("addiiton of two of is", (a2+b2));

// 16. Write a JavaScript program to find the largest number.

let a3 = [2,6,10,15,20]
function largestnum(num) {
    let max = array[0];
    //let min = array[0];
    for (m = 1; m < num.length; m++)  {
        if(num[m] > max) {
            max = num[m];
            console.log("Print the largest number:", max)
        }
    }     
}
largestnum(a3)

// 17. Write a JavaScript program to demonstrate an if...else statement.

let CreditScore = 65 ;
if(CreditScore > 50) {
    console.log("Eligible for Credit card")
}else{
    console.log("Not Eligible for Credit Card")
}
// 
// 18. Write a JavaScript program to demonstrate nested if...else if... statement.

function AssigCompany (comp){
    if(comp === "Power sector") {
        company = ("adani power company")
    }else if (comp === "fintech") {
        company = ("Paytm")
    }else if (comp === "Stock") {
        company = ("CDSL")
    }else {
        company === ("No company found")
    }
    console.log("Your company name is: " + company);
}
AssigCompany("Stock")

// 19. Write a JavaScript program to demonstrate nested if...else statement.

let goldRate = 75;
if (goldRate > 75) {
    console.log("Gold Rate is high")
} else{
    if (goldRate < 75) {
        console.log("Gold rate is low")
    }else {
        console.log("Rate of Gold not change")
    }
}

// 20. Write a JavaScript program to find odd and even numbers.

for (i=0; i<=5; i++) {
    if(i % 2 !== 0){
        console.log("Print odd number:" , i)
    }else {
        console.log("Print even number:", i)
    }
}

// 21. Write a JavaScript program to compare two strings.

let string1 = "1rivet"
let string2 = "1rivetq"

if (string1 === string2) {
    console.log("String are same")
}else {
    console.log("String are not same")
}

// 22. Write a JavaScript program to demonstrate a for loop.

for (let i = 0; i<=5; i++) {
    console.log(i)
}

// 23. Write a JavaScript program to print stars using a for loop, where the number of stars printed should be equal to the row number.
// 24. Write a JavaScript program to demonstrate a while loop.

let k = 0;
while(k<=5){
    if(k % 2 !==0){
        console.log("ODD Number:", k)
    }
    k++;
}

// 25. Write a JavaScript program to print the entered number in reverse.

for (let p = 5; p>=0; p--){
    console.log("for loop -- entered number in reverse order", p)
}
// 26. Write a JavaScript program to demonstrate the usage of a break statement inside a while loop.

let d = 0;
 while (d<=10) {
    if (d === 5) {
     break;   
    }
     console.log("Print the vlaue of ", d)
     d++;
}

// 27. Write a JavaScript program to demonstrate the usage of break and continue statements inside a while loop.
// 28. Write a JavaScript program to print the alphabets using a for loop.
// 29. Write a JavaScript program to demonstrate a forEach loop.
// 30. Write a JavaScript program for printing the Multiplication table.
// 31. Write a JavaScript program for printing prime numbers.
// 32. Write a JavaScript program to check whether a given number is Armstrong.
// 33. Write a JavaScript program to print Floyd’s triangle.
// 34. Write a JavaScript program to print Fibonacci series.
// 35. Provide an example of using a loop to search for a specific element within an array and breaking out of the loop once the element is found.
// 36. Write a program to print the below output: * 1 * 12 * 123 * 1234 * 12345 * 123456 * 1234567

function pyramid(n) {
    for (i=0;i<n;i++) {
        let a = '';
        for (j=a; j<=i;j++) {
            a = a + j; 
            console.log(a);
        }
    }
}
pyramid(5);
// 37. Write a JavaScript program to print alternative elements in a String array.
// 38. How to check if an array contains a specific value?

let array3 = [4,5,6,1,8];
let value1 = 10;
    if(array3.includes(value1)) {
        console.log("Value of array " +  value1 +  " is present in array")
    }else {
        console.log("Value of array " +value1 + " is not present in array")
    }

// 39. How to check if two arrays are equal?

let array4 = [4, 5, 6, 7, 8];
let array5 = [4, 5, 6, 7, 8];

function check2arrayEqual(arr1, arr2) {

    // Iterate through the arrays
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log("Arrays are different at index", i);
        }
    }

    // If the loop completes without finding differences, return true
    console.log("Both arrays are equal.");
}
check2arrayEqual(array4, array5);

// 40. How to find duplicate elements in a given array?
// 41. How to find the count of duplicates in an array?
// 42. How to find the maximum or minimum element in an array?

let array7 = [10,20,15,5,6,50]
function maxormin(arra7) {

    let max = array[0];
    //let min = array[0];
    for (n = 1; n < arra7.length; n++) {
        if(arra7[n] > max) {
            max = arra7[n];
            console.log("Print the maximum number:", max)
        // }else if (arra7[n] < min) {
        //     min = arra7[n];
        //     console.log("Print the minimum number:", min)
        // }
    }    
        
}
}
maxormin(array7)

// 43. How to find the sum or average of elements in an array?

let array8 = [10,20,30,40]
for (i = 0; i<array8.length; i++){

}

// 44. How to find the index of a specific value in an array and concatenate two arrays?
// 45. How to find missing number in an Array?
// 46. How to reverse the elements of an array?
// 47. How to sort an array in ascending or descending order?

let array15 = [1,2,3,4,5]


// 48. How to remove duplicate elements from an array?
// 49. How to flatten a nested array?
// 50. How to remove specific elements from an array based on a condition?
// 51. How to check if an array is empty or contains any elements?
// 52. How to find the frequency of each element in an array?
// 53. How to find the longest or shortest element in an array of strings?
// 54. How to check if an array is sorted in ascending or descending order?
// 55. Write a program to swap two strings without using temp or third variable?

let firstName = "Parth"
let lastName = "Shah"

console.log("Print value before swap:", firstName, lastName)

// [firstName, lastName] = [lastName, firstName]

// console.log("Print the value after swap:", firstName, lastName)

// 56. I have locations defined in an array. I want to concatenate each with the first array element to form 
//the complete location, assuming the first element of the array should be in every location that needs to be found.

let array14 = ["Gujarat" , "Vapi", "Valsad", "Surat", "Navsari"]
 let firstlocation  = array14[0];
 for (i =1;i<array14.length; i++) {
    a15 = firstlocation + " " + array14[i];
    console.log(a15);
 }


// 57.JavaScript Program to Find the Square Root
// 58. JavaScript Program to Calculate the Area of a Triangle

let base = 20;
let height = 45;

console.log("Area of triangle: " , (0.5 *base*height));
 
// 59.Javascript Program to Generate a Random Number
// 60.JavaScript Program to Check Prime Number
// 61.JavaScript Program to Print All Prime Numbers in an Interval
// 62.JavaScript Program to Find the Factorial of a Number
// 63.JavaScript Program to Check Armstrong Number


function generateTable() {
    for (let d = 1; d <= 10; d++) {
        console.log("5 * " + d , " = " + (5 * d));
    }
}
