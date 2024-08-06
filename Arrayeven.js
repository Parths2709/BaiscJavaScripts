// get even number from array
var scores = [12,13,14,15,16,17,18]
var evenNo = []
for(let i=0; i<scores.length; i++) 
    {
        if(scores[i]%2 == 0)
            {
                evenNo.push(scores[i])
            }
    }
 console.log(evenNo)   

//------Filter method-----------------------------//
 let NewFilterEvenNo = scores.filter(score=>score%2==0)
 console.log("New even no "  + NewFilterEvenNo)

// map method: multiple the out of even array with 3 (each value of array)
let MapArray = NewFilterEvenNo.map((score=>score*3))
console.log("MapArray Using the Filter method " + MapArray)

// get sum of array and store in new variable
var marks = [40,50,60,70,80]
var sum =0;
 for(let i=0; i<marks.length;i++)
    {
        sum =sum+marks[i]
    }
 console.log("Sum of Array " + sum);
 
 let NewSumMarks = marks.reduce((sum, mark)=>sum+mark,0)
 console.log("NewSumMarks " + NewSumMarks)

 // using three method at time
 var scores1 = [12,13,14,15,16,17,18]
let SumValue =  scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum, mark)=>sum+mark,0)
console.log("Output " + SumValue);
 //----Sorting-----------//
 var marks = [40,50, 90,30,60,70,80]
 console.log(marks.sort());
 console.log("dscending order " + marks.reverse())

 let fruits = ["Banana", "Mango", "Apple"]
 console.log(fruits.sort())