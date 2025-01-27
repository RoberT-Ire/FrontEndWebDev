// 4 (A)
// Lecturer Examples - Number
function countString(value: string):number
{
    return value.length;
}

console.log(countString(" test1 "));        // Output

// 4 (B)
// Removing Leading and Trailing Whitespace with Trim
function countStringSpaces(value: string)
{
    return value.trim().length;
}

console.log(countStringSpaces(" test1 "));  // Output

// 4 (C)
// Function with Trim
let isTrue: boolean = false;    // Initialise Var: If true - Whitespace Included, If false - Whitespace not Included

function countStringTrim(value: string):number
{
    // If statement - Based off whether the User wants to Remove the Whitespace
    if (isTrue)
    {
        return value.length;
    }

    else
    {
        return value.trim().length;
    }
    
}

console.log(countStringTrim(" test1 "));    // Output

// Alt 4 (C)
// Alternative Solution: Removing Leading and Trailing Whitespace with Trim
function countBoth(value: string, spaces?: boolean):number  // The ? beside "spaces" makes it an Optional Parameter
{
    // Initialise Var
    let num: number;

    // If statement - Determines whether the User wants to Remove the Whitespace
    if (spaces)
    {
        num = value.length;
    }

    else
    {
        num = value.trim().length;
    }

    return num;

}

// Outputs
console.log(countBoth(" test1 ", true));
console.log(countBoth(" test1 ", false));

console.log(countBoth(" test1 "));