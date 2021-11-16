// Write a program to validate age.

var age = 0;
//var age = -10;
//var age = 110;
var age = 10;

// Rule 1: Age cannot be zero or negative
// Rule 2: Age cannot be above 100
if ( age <= 0 || age >100){
    console.log("Invalid");
}
else {
    console.log("Valid")
}
