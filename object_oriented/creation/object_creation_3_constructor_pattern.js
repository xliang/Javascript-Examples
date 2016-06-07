console.log("--- Object Constructor ---"); 

var mango2 =  new Object ();
mango2.color = "yellow";
mango2.shape= "round";
mango2.sweetness = 8;

mango2.howSweetAmI = function () {
    console.log("Hmm Hmm Good");
}; 

console.log("--- Constructor Pattern ---");


function Person2 (name, age, job) {
    this.name =  name;
    this.age = age;
    this.job = job;
    
    // every function is a new object
    this.sayName = function() {
        console.log(this.name);
    };
}


var person2_1 = new Person2("Nick", 29, "Programmer");
var person2_2 = new Person2("Tom", 59, "CTO");

person2_1.sayName();
person2_2.sayName();

// it returns different, different object...
console.log(person2_1.sayName == person2_2.sayName);

console.log("--- instanceof ---");

console.log('person2_1 instance of Person2: ' + (person2_1 instanceof Person2)); 
console.log('person2_1 instance of Object: ' + (person2_1 instanceof Object)); 


console.log("--- use a constructor ---");

var person = new Person2('Nick', 29, 'Software Developer'); 
person.sayName(); 

console.log("--- use as a function, will add to global  ---");

Person2('Greg', 27, 'Doctor'); // add to window
// window.sayName(); 

nsole.log("--- Scope-Safe Constructor ---");

/*
    Scope-Safe Constructors
    
    Can call Constructor with or without new
*/

function Book2 (name){
    if (!(this instanceof Book)) {

        // this constructor was called without "new"
        return new Book(name); 
    }
}


console.log("--- call in the scope of another object  ---");

var o = new Object(); 
Person2.call(o, 'Karen', 25, 'Nurse'); 
o.sayName(); 


// comparing with factory pattern, there have three difference
// 1. there is no object created explicitly
// 2. the properties and methods are assigned directly to this
// (this is really a pointer)
//  (this points to the object that's invokign the current function)
// 3. there is no return statement. 

/*

The main problem with the Constructor Pattern is, as in the Factory Pattern, inefficiency. 
In the Constructor Pattern, methods are [still] copied to all new object instances. 
This problem led to the creation of the Combination Constructor/Prototype Pattern.

*/

console.log("--- Constructor Property ---");
/*
    each object in Javascript has an implicit property named constructor 
    that references the constructor that was used to create the object. 
    And becasue the property is a property of the constructor, each object 
    has a way to find its prototype

    e.x. A deeper reference to ninja.constructor.prototype.swingSword

*/


console.log(person2_1.constructor);
console.log(person2_1.constructor === Person2);

// it does not make sense fo two instance of function that do the same thing

function Person3 (name, age, job) {
    this.name =  name;
    this.age = age;
    this.job = job;
    // every function is a new object
    this.sayName = sayName;
}

// a work around is to move the function out from the constructor
function sayName () {
    console.log(this.name);
 }

var person3_1 = new Person3("Nick", 29, "Programmer");
var person3_2 = new Person3("Tom", 59, "CTO");

console.log(person3_1.sayName == person3_2.sayName);

// it solves duplicate function issue, but create clutter on Global scope

console.log("--- Object.defineProperty ---");

function Book (name) {
    Object.defineProperty(this, "name", {
        get: function () {
            return "Book: " + name; 
        },
        set : function (newName) {
            name = newName; 
        },
        configurable : false
    } ); 
}

var myBook = new Book("SPA"); 

console.log(myBook.name); 



