/**
 * Created by Owner on 6/18/2014.
 */
var items = [1, 2, 3, 4, 5, 4, 3, 2, 1];
// indexOf, start searching from front
console.log(items.indexOf(10));

// lastIndexOf, starting search from back
console.log(items.lastIndexOf(1));

// not existed, return -1

console.log(items.indexOf(100));
console.log(items.indexOf("Hello"));

var person = { name: "Nicholas" };
var people = [{ name: "Nicholas" }];
var morePeople = [person];

console.log(people.indexOf(person)); // -1
console.log(morePeople.indexOf(person)); //0

// !!! How to check object equlity !!!
// check reference??, overthwise, need to implemnet the object
//

