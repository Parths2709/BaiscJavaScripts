//1)How to iterate over array

// let array = [1,2,3,4,5]
// for (let i = 0; i<= array.length; i++) {
//     console.log(i);
// }
//-----------------------------------------------------------------------------------------------------------

// 2) Check if an array contain a specific value

// let fruits = ["apple", "Banana", "Orange", "grape"];
// //The function containFruits takes two parameters: array (the array to search in) and fruit (the value to search for).
// function containFruits(arry, fruits) {

//  for (let i= 0; i<array.length; i++) {
//     if (arry[i] === fruits) {
//         return true;
//     }
//   }
//  return false;
// }
// console.log(containFruits(fruits, "apple")); // Output: true
// console.log(containFruits(fruits, "kiwi")); // Output: false

//--------------------------------------------------------------------------------------------------------------------------

//3)Check if two arrays are equal:

// let array1 = ["apple", "Banana", "Orange", "grape"];
// let array2 = ["apple", "Banana", "Orange", "grape"];

// function checkArrayEquals(array1, array2) {
//     for (let i=0; i<array1.length; i++) {
//         if(array1[i] !== array2[i]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(checkArrayEquals(array1,array2));

//--------------------------------------------------------------------------------------------------------------------------

//4)Check if three arrays are equal: print with console.log
// console.log("------ Point number 4-------------")
// let array3 = [1,2,3]
// let array4 = [1,2,3]
// let array5 = [1,2,4]

// function checkThreeEquals(array3, array4, array5) {
//     for (let i = 0; i<array3.length; i++) {
//             // If corresponding elements are not equal, return true
//             if (array3[i] !== array4[i])  {
//                 console.log("Arrays are different: Elements differ at index " + i);
//                 return ;
//             }else {
//                 if (array3[i] !== array5[i]) {
//                     console.log("Arrays are different: Elements differ at index " + i);
//                     return ;
//                 }
//             }
//         }
    
//         // If all elements are equal, return true
//         console.log("Arrays are same: Lengths are equal.");
//         return ;
//     }
//     checkThreeEquals(array3, array4, array5);

//---------------------------------------------------------------------------------------------------------------------

//5)Check if three arrays are equal: print with console.log
// console.log("------ Point number 5-------------")
// let array6 = [1,2,3]
// let array7 = [1,2,3]
// let array8 = [1,2,4]

// function checkThreeEquals(array6, array7, array8) {
//     for (let i = 0; i<array6.length; i++) {
//             // If corresponding elements are not equal, return true
//             if (array6[i] !== array7[i])  {
//                 return false ;
//             }else {
//                 if (array6[i] !== array8[i]) {
//                     return false;
//                 }
//             }
//         }
    
//         // If all elements are equal, return true
//         return true;
//     }
//     console.log(checkThreeEquals(array3, array4, array5));

//--------------------------------------------------------------------------------
/*let arra1 = [1, 2, 3];
let arra2 = [0, 2, 4, 3];
let arra3 = [6, 5, 4];

// Function to check if a value exists in any of the arrays
function checkValueExists(arra1 , arra2, arra3) {
    for (i=0; i<arra1.length ;i++){
        for (j=0; j<arra2.length ; j++) {
            for (k=0; k<arra3.length; k++){
                if(arra1[i] === arra2[j] ){
                    console.log("Value are same" + "  " + arra1[i] + "  " + arra2[j] );
                }if (arra1[i] === arra3[k]) {
                    console.log("Value are same" + arra1[i] + "  " + arra3[k] )
                }else {
                    console.log("Value of all three array are not same ")
                }
            }
        }
    }
}
checkValueExists(arra1, arra2, arra3)*/

//----------------------------------------------------------------
/*let arra1 = [1, 2, 3];
let arra2 = [0, 2, 4, 3,2];
let arra3 = [6, 5, 4];
for (let i = 0; i < arra1.length; i++) {
   for (let j = 0; j < arra2.length; j++) {
       if (arra1[i] == arra2[j]) {
           console.log("Common value between arra1 and arra2: " + arra1[i]);
       }
   }
}
for (let i = 0; i < arra1.length; i++) {
   for (let j = 0; j < arra3.length; j++) {
       if (arra1[i] == arra3[j]) {
           console.log("Common value between arra1 and arra3: " + arra1[i]);
       }
   }
}
for (let i = 0; i < arra2.length; i++) {
   for (let j = 0; j < arra3.length; j++) {
       if (arra2[i] == arra3[j]) {
           console.log("Common value between arra2 and arra3: " + arra2[i]);
       }
   }
} */

//-----------------------------------------------------------------------------------
/*let arra1 = [1,2,3]
let arra2 = [1,4,3]
let arra3 = [6,5,4]
 
function CheckTheArrayEquals(arra1,arra2,arra3) {
    for (let i=0; i<arra3.length; i++){
        if (arra1[i] === arra2[i]) {
            console.log("Arra1 and 2 are same")
        } else if (arra1[i] != arra3[i]) {
            console.log("arra1 and 3 are different")
        }
    }
   
}
CheckTheArrayEquals(arra1,arra2,arra3)*/

//------------------------------------------------------------
//duplicate value from array
let arra = [0,1,2,4,2,5,2,5];
let duplicates = [];
let foundDuplicate = false;

for (let i = 0; i < arra.length; i++) {
    for (let j = i + 1; j < arra.length; j++) {
        if (arra[i] === arra[j] && !duplicates.includes(arra[i])) {
            duplicates.push(arra[i]);
            foundDuplicate = true;
        }
    }
}

if (!foundDuplicate) {
    console.log("No duplicate values found in arra.");
} else {
    console.log("Duplicate values in arra:", duplicates);
}

//     [0,1,2,3,4,6,7,8]
// i = [0,1,2,4,2,5,2,5];
// j = [1,2,3,4,5,6,7,8];  
//     [2,5]

//--------------------------------------------------------------------------------
// Addding the element
const number = [3,4];
// to add the value at end of array we will use push notation
number.push(5,6)

// to add the value at beginnig we will ise unshift notation
number.unshift(1,2)

// to add the value at middle of array we will use splice notation
number.splice(2, 0, 'i', 'j')
//number.splice(2,2)
console.log(number);