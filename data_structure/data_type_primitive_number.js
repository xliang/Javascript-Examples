
console.log("Converting using Number()");

console.log("---Converting Boolean---");
console.log(Number(true));
console.log(Number(false));

console.log("---Converting null---");
console.log(Number(null));

console.log("---Converting undefined---");
console.log(Number(undefined));

console.log("---Converting string---");
console.log(Number(""));
console.log(Number("123"));
console.log(Number("00234"));

console.log("---Converting using parseInt/parseFloat---");
var myData1 = parseInt("5.6"); 
var myData2 = parseFloat("5.667"); 

console.log("result: " + myData1);
console.log("result: " + myData2);  

console.log(parseFloat("0908.5"));
