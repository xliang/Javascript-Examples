// NaN, short for Not a Number, which is used to indicate when an operation intended to return 
// a number has failed (as opposed to throwing an exception)

// dividing a number by 0, return NaN

var myValue = NaN/0; 

console.log(myValue); 

// NaN is not equal to NaN
console.log (NaN == NaN); 

console.log(isNaN(NaN)); 

// cannot convert to number 
console.log(isNaN("blue"));

// true can be convert to 1
console.log(isNaN(true));