// //condition to determine if a person is eligible to vote based on their age
// console.log("---with function call---")
// function agevoting (age) {
//   if (age >= 18) {
//     console.log("You are eligible to vote.");
// } else {
//   console.log("You are not eligible to vote yet.");
// }
// }
// agevoting(50)
// // without function-------------------------------------------------------------------
// console.log("----without function call----")
// let age = 55
//   if (age >= 18) {
//       console.log("You are eligible to vote.");
//   } else {
//     console.log("You are not eligible to vote yet.");
//   }

// //Determining if a Number is Positive, Negative, or Zero: -- With function
// console.log("---with function call---")
// function numbercheck (num) {

// if (num>=0) {
//   console.log("number is positive")
// } else if (num<0) {
//   console.log("number is negative")
// } else {
//   console.log("no number found")
// }
// }
// numbercheck(-6)

// //-- without function
// console.log("---without function call--")
// let num = 5;
// if (num>=0){
//   console.log("number is positive")
// } else if (num<0) {
//   console.log("number is negative")
// } else {
//   console.log("no number found")
// }

// //Using nested if-else to assign grades based on scores.
console.log("---without function call---")
let score = 59;
if (score>=90) {
  grade = 'A';
}else if(score>=80) {
  grade = 'B'
}else if (score>=70) {
  grade  = 'C'
}else if  (score >= 60) {
  grade = 'D'
}else {
  grade = 'F'
}
console.log("Score: " + score + ", Grade: " + grade);

// //-- With function
// console.log("---with function call---")
// function checkGrade(score) {
//   let grade;
//   if (score >= 90) {
//     grade = 'A';
//   } else if (score >= 80) {
//     grade = 'B';
//   } else if (score >= 70) {
//     grade = 'C';
//   } else {
//     grade = 'D';
//   }
//   console.log(`You got grade ${grade}.`);
// }
// checkGrade(80)

// //assign car based on type.
function assignCarBasedOnType(carType) {
  //let car;
  if (carType === "sedan") {
    car = "Swift Dzire";
  }else if (carType === "SUV") {
    car = "Honda CR-V";
  }else if (carType === "pickup") {
    car = "Ford F"
  }else {
    car = "no car found"
  }
  console.log(`Your car type is: ${car}`)
}
assignCarBasedOnType("SUV")

// //-------------------------------------------------------------
// let dayNumber = 5;
// let day;

// switch (dayNumber) {
//     case 1:
//         day = "Sunday";
//         break;
//     case 2:
//         day = "Monday";
//         break;
//     case 3:
//         day = "Tuesday";
//         break;
//     case 4:
//         day = "Wednesday";
//         break;
//     case 5:
//         day = "Thursday";
//         break;
//     case 6:
//         day = "Friday";
//         break;
//     case 7:
//         day = "Saturday";
//         break;
//     default:
//         day = "Invalid day number";
//         break;
// }
// console.log("Day of the week for day number " + dayNumber + " is: " + day);