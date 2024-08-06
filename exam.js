//9.
// for (let i=5; i>=0; i--) {
//     console.log("reverse the elements of an array", i)
//   }

 let array = [1,2,3,4] // array length is 3
 
 for (let i = array.length-1; i>=0; i--){
    console.log("reverse the elements of an array", i);
 }

  
 //5.
 
 let a = 65;
 let b = 75;

//  console.log("Print the number befor swap:", a1 + " " + b1) // output (65 and 75)
a =a+b;
b =a-b;
a = a-b
//  b1 = a1 // update the value of b1 to c1 (b1 value is 65)
//  a1 = 75; // re declare the a1 value as 75

 console.log("Print the number befor swap:", a + " " + b) // output (75 and 65)

  //2 
  function question2(n) {
    for (i=0; i<=n; i++) {
        let a = "";
        for (j=a; j<=i; j++) {
            a = a + j;
        }
        console.log(a)
    }
 }
 question2(7)

 //6.
 let array1 = [1,2,3,4,2,3] 

 function duplicatearray(arry) {
  //step- we will iterate first loop and create the variable 
    for (i = 0; i<array.length; i++) {
        // print store the value of i in value
        let value = [];
        for (j = 1; j<=i; j++) {
            // compare the value
            if (arry[i] !== arry[j]) {
                console.log("duplicate value:", i)
            }
        }
    }
 }

 //4. 
 let array2 = [1,2,3,4,5,6];
 let value = 7;
 if (array2.includes(value)) {
    console.log(value, "is present in array")
 }else {
    console.log(value, "is not present in array")
 }

 //7 
 function table () {
    for (i=1;i<=10; i++) {
        console.log("5 * " + i, " = " + (5 * i))
        //console.log("5 * " +i, " = " +(5*i))
    }
 }
 table()

 //3
 let array27 = ["gujarat", "Vapi", "Valsad", "Surat", "Navsari"]
 let firstposition = array27[0];
 for (i=1;i<array27.length; i++) {
    finalpositoin = firstposition  + " " + array27[i]
    console.log(finalpositoin)
 }