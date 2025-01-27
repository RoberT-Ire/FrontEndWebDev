// Boolean
let flag: boolean = true;                           // Initialize
console.log("Value assigned to flag is: " + flag);  // Output

// Number
let intEx: number = 42;                 // Initialize
console.log("Number is: " + intEx);     // Output

// String
let stringEx: string = "Hello World";   // Initialize
console.log("String is: " + stringEx);  // Output

// Array
let arrayEx: number[] = [1, 2, 3];      // Initialize
console.log("Array is: " + arrayEx);    // Output

// Any
let result: any;    // Can be declared as any type here

result = 1;         // As a Number
console.log("The output of Result type any used as a Number is: " + result);

result = 'Hello';   // As a String
console.log("The output of Result type any used as a String is: " + result);

result = [1, 2, 3]; // As an Array
const total = result.reduce((a: number, b: number) => a + b, 0);                    // Create Constant Total with Array
console.log("The total output of Result type any used as an Array is: " + total);   // Output

// Lecturer Examples - Arrays
let myArray:number[] = [1, 3, 5];   // Declare as an Array

// For Loop for filtering through Array
for(let i = 0; i < myArray.length; i++)
{
    console.log("Item: " + myArray[i] + " is in myArray.");
}

// For Each using Lambda expression
myArray.forEach((val)=>{
    console.log("Value is: " + val);
});