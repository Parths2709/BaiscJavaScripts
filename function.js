//Adding the number
 function add(a,b) {

    return a+b;
 }
 var sum = add(10,20)
 console.log(sum)

 // do not have name => anynoymus function

 let SumofNumber = function(c,d)
 {
    return c+d;
 }
 console.log("Sum of two number",+SumofNumber(40,30))

 // Using the fat operator =>

var sumofNo = (c,d)=>c+d
console.log(sumofNo(50,50))