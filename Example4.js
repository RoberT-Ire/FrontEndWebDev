// 4 (A)
// Lecturer Examples - Number
function countString(value) {
    return value.length;
}
console.log(countString(" test1 ")); // Output
// 4 (B)
// Removing Leading and Trailing Whitespace with Trim
function countStringSpaces(value) {
    return value.trim().length;
}
console.log(countStringSpaces(" test1 ")); // Output
// 4 (C)
// Function with Trim
var isTrue = false; // Initialise Var: If true - Whitespace Included, If false - Whitespace not Included
function countStringTrim(value) {
    // If statement - Based off whether the User wants to Remove the Whitespace
    if (isTrue) {
        return value.length;
    }
    else {
        return value.trim().length;
    }
}
console.log(countStringTrim(" test1 ")); // Output
// Alt 4 (C)
// Alternative Solution: Removing Leading and Trailing Whitespace with Trim
function countBoth(value, spaces) {
    // Initialise Var
    var num;
    // If statement - Determines whether the User wants to Remove the Whitespace
    if (spaces) {
        num = value.length;
    }
    else {
        num = value.trim().length;
    }
    return num;
}
// Outputs
console.log(countBoth(" test1 ", true));
console.log(countBoth(" test1 ", false));
console.log(countBoth(" test1 "));
