
/* 
    Object.keys 
    method returns an array of a given object's own property names, in the same order as we get with a normal loop.
*/

console.log(Object.keys({ "tab1": "1" , tab2: "2"})); 

console.log(Object.keys({ "tab1": "1" , tab2: "2"})[0]);

console.log(Object.keys({ "tab1": "1" , tab2: "2"})[1]);

console.log(Object.keys({ "tab1": "1" , tab2: "2"})[2]);

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
console.log(Object.keys(object1));

/* Object Create 

*/
var proto = {
	sentence : 4,
	probation : 2
}; 

var first = Object.create(proto); 
first.name = 'Joe';
first.id = '12A'; 

var second = Object.create(proto); 
second.name = 'Sam';
second.id = '2BC';