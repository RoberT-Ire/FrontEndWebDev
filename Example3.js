// Boolean
var flag = true; // Initialize
console.log("Value assigned to flag is: " + flag); // Output
// Number
var intEx = 42; // Initialize
console.log("Number is: " + intEx); // Output
// String
var stringEx = "Hello World"; // Initialize
console.log("String is: " + stringEx); // Output
// Array
var arrayEx = [1, 2, 3]; // Initialize
console.log("Array is: " + arrayEx); // Output
// Any
var result; // Can be declared as any type here
result = 1; // As a Number
console.log("The output of Result type any used as a Number is: " + result);
result = 'Hello'; // As a String
console.log("The output of Result type any used as a String is: " + result);
result = [1, 2, 3]; // As an Array
var total = result.reduce(function (a, b) { return a + b; }, 0); // Create Constant Total with Array
console.log("The total output of Result type any used as an Array is: " + total); // Output
// Lecturer Examples - Arrays
var myArray = [1, 3, 5];
for (var i = 0; i < myArray.length; i++) {
    console.log("Item: " + myArray[i] + " is in myArray.");
}
myArray.forEach(function (val) {
    console.log("Value is: " + val);
});
