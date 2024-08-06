//Loops are used to perform repetitive tasks efficiently.
//Examples include iterating over webpage elements, arrays, or performing actions based on conditions.

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

for (let i = 10; i >= 5; i--) {
    console.log(i);
}

for (let i = 2; i <= 50; i += 2) {
    // Print the current even number
    console.log(i);

    // Check if the current number is a multiple of 10
    if (i % 10 === 0) {
        console.log("Multiple of 10");
    }
}

const fruits = ["apple", "banana", "orange", "grape"];

for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit:", fruits[i]);
}

for (let num = 500; num <= 500; num++) {
    if (num % 5 === 0) {
      console.log("High");
      break;  // Exits the loop after the first multiple of 5
    }
  }
  