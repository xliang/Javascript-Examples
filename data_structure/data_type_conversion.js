// Number

// return 0
console.log(Number(null)); 

// return NaN
console.log(Number(undefined)); 

// return 0
console.log(Number("")); 


// parseInt

console.log(parseInt("123blue")); 

// return NaN
console.log(parseInt("")); 

// tostring
var age = 11; 
console.log(age.toString()); 

var found = true;
console.log(found.toString()); 

var valueOfNull = null; 
var valueOfUndefined; 

// use String() to check null or undefined. 
console.log(String(valueOfNull)); 
console.log(String(valueOfUndefined)); 

