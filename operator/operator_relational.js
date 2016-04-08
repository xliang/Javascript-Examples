// Relational Operators
// 

// the character code of uppercase letters are all lower than the characters code of lowercase letter
// 
console.log(("Brick" < "alphabet")); 

console.log(("Brick".toLowerCase() < "alphabet".toLowerCase())); 

// Rules: 
// if an operand is a number, convert the other operand to a number and perform a numeric comparison
console.log("23" < 3); 

// if an operand is an object, call valueOf() and use its result to perform the comparison
// if valueOf() is not available, call toString() and use that value. 

// if an operand is a Boolean, convert it to a number and perform the comparison. 

console.log(true < 0); 
console.log(true > -1); 