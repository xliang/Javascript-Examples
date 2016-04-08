/*
     Class-based vs. Prototype-based

     Class-based:     defines what it should look like (blue print)
     Prototype-based: create what it should look like  (the object itself)
                      JS's use of the new operator is a departure from its protoype-based roots. 
                      perhaps as an attempt to make it more comprehensible to developers familiar 
                      with class-based inheritance. 

                      Alternative to new, Object.Create is created

*/

/*
// reference: 
// Code Project http://www.codeproject.com/Articles/687093/Understanding-JavaScript-Object-Creation-Patterns
// [LW]: One of the best article to explain pototye, constructor, object inheritance, relationship.

Difference between Prototype and __proto__ in Javascript 
http://geekabyte.blogspot.ca/2013/03/difference-between-protoype-and-proto.html

Understanding Constructor Function and this Keyword in Javascript
http://geekabyte.blogspot.nl/2013/03/understanding-constructor-function-and.html

Stack Overflow 

Setting Prototype for Object Literal
http://stackoverflow.com/questions/15472005/setting-prototype-for-object-literal

Adding Prototype to JavaScript Object Literal 
http://stackoverflow.com/questions/1592384/adding-prototype-to-javascript-object-literal

__proto__ Vs. Prototype in javaScript
http://stackoverflow.com/questions/9959727/proto-vs-prototype-in-javascript


The Ultimate Gude to Object Oriented Basics Of javaScript
http://www.1stwebdesigner.com/object-oriented-basics-javascript/

Object Oriented JavaScript Pattern Comparison 
http://john-dugan.com/object-oriented-javascript-pattern-comparison/?PageSpeed=noscript

OOP in javascript: What you Need to Know
http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/

Javascript Object in Detail
http://javascriptissexy.com/javascript-objects-in-detail/

The Secret of Life Of JavaScript
http://eloquentjavascript.net/06_object.html

Understanding Design Patterns in JavaScript
http://code.tutsplus.com/tutorials/understanding-design-patterns-in-javascript--net-25930

Details of Object Model
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model




*/


// javascript does not have class, it relys on constructor and prototype 
// to bring similar order to a object. 

/*
 -- prototype 

    the prototype relationships of JavaScript objects from a tree-shaped structure, and at the root of 
    this structure sits Object.protptype

    Many objects don’t directly have Object.prototype as their prototype, but instead have another object, 
    which provides its own default properties. 

    Functions derive from Function.prototype, and arrays derive from Array.prototype.

    Each function is created with a prototype property, which is an object containing properties
    and methods that should be available to instances of a particular reference type.
    This object is literally a prototype for the object to be created

    __proto__ is supported in some JavaScript engine. This property allows you to read and write
    to [[prototype]] property. 

    !!! once the constructor is called !!!

    The benefit of using the prototype is that all of its properties and methods
    are shared among object instances. Instead of assigning object information
    in the constructor, they can be assigned directly to the prototype, as in this example

    prototype property is an object containing properties and
    methods that should be available to instances of a particular reference type

    In prototype-based system, we create an object that looks like, 
    and tell javascript engine that we want more objects look like that. 

    You might have noticed that Shape.prototype, Function.prototype and Object.prototype 
    all have a constructor property. If you explore further you will find that the value 
    of the constructor property is a reference back to the constructor function that this prototype relates to.

-- constructor 

     In JavaScript, calling a function with the new keyword in front of it causes it to be treated as 
     a constructor. 
     
     The constructor will have its this variable bound to a fresh object, and unless it explicitly 
     returns another object value, this new object will be returned from the call.

     An object created with new is said to be an instance of its constructor.

     Constructors (in fact, all functions) automatically get a property named prototype, 
     which by default holds a plain, empty object that derives from Object.prototype. 
     Every instance created with this constructor will have this object as its prototype.


*/



 
// In class-based system, we define blueprints.  

console.log("--- prototype chain ---"); 

function Shape(color, borderThickness) { 
    this.color = color;
    this.borderThickness = borderThickness;
}

var shape = new Shape('red', 2); 

if (shape.__proto__ == Shape.prototype)
{
    console.log("shape.__proto__ == Shape.prototype");
}

if (shape.__proto__.__proto__ == Object.prototype){
    console.log("shape.__proto__.__proto__ == Object.prototype"); 
}

if (shape instanceof Shape)
{
    console.log("shape instanceof Shape == true"); 
}

if (shape instanceof Object)
{
    console.log("shape instanceof Object == ture"); 
}

console.log("\n--- prototype-based object declaration and initialization - using new ---\n"); 

// step 1: define prototype object (template of the object)
var proto = {
    sentence : 4,
    probation: 2
}; 

// step 2: define object construtor
// constructor is set outside of prototype
// 
var Prisoner = 
    function (name, id) {
        this.name = name; 
        this.id = id; 
    }

// step 3: Link constructor to prototype

Prisoner.prototype = proto; 

// step 4: Instantiate the objects

var firstPrisoner = new Prisoner('Joe', '12A'); 
var secondPrisoner = new Prisoner ('Sam', '2BC'); 

console.log("prototype-based object declaration and initialization - using Object.Create"); 

var firstPrisoner2 = Object.create(proto); 
firstPrisoner2.name = 'Joe'; 
firstPrisoner2.id = '12A'; 

var secondPrisoner2 = Object.create(proto); 
secondPrisoner2.name = 'Sam'; 
secondPrisoner2.id = '2BC'; 

// !! upper case, constructor

function Person () {
}

Person.prototype.name = "Nick";
Person.prototype.age = 29;
Person.prototype.job = "Engineer";
Person.prototype.sayName = function () {
    console.log(this.name);
};

var person1 = new Person();
person1.sayName();

var person2 = new Person();
person2.sayName();

console.log("--- Check Prototype ---");

console.log(Person.prototype.isPrototypeOf(person1));
console.log(Person.prototype.isPrototypeOf(person2));

console.log("--- Determine HasPrototypeProperty ---");

function hasPrototypeProperty(object, name){
    return !object.hasOwnProperty(name) && (name in object);
};

//
// constructor
//

console.log("-- create property on instance -- ");

function Person2(){
}

Person2.prototype.name = "Nicholas";
Person2.prototype.age = 29;
Person2.prototype.job = "Software Engineer";
Person2.prototype.sayName = function(){
    console.log(this.name);
};

// name can be found on prototype
var person = new Person2();
console.log(hasPrototypeProperty(person, "name"));

// it is changed, name is created the instance now.
// shadow the property on the prototype

person.name = "Peter";
console.log(hasPrototypeProperty(person, "name"));

console.log("---Enumerate the properties---");

for(var prop in person) {
    console.log(prop);
}

console.log("--- enumerate prototype properties---");

var keys = Object.keys(Person.prototype);
console.log(keys);

console.log("---enumerate instance properties---");

var keys2 = Object.keys(person);
console.log(keys2);

console.log("--- Alternative prototype ---");

function Person3() {
}

Person3.prototype = {
    name: "Nick",
    age: 29,
    job: "Developer",
    sayName : function () {
        console.log(this.name);
    }
};

// Dynamic Nature of Prototype

console.log("--- Dynamic Nature of Prototype ---");

var friend = new Person();
Person.prototype.sayHi = function() {
    console.log("H!");
};

friend.sayHi();

var friend2 = new Person();
Person.prototype = {
    constructor: Person,
    name: "Nick",
    age: 29,
    job: "Developer",
    sayName2: function(){
        console.log(this.name);
    }
};

// Error: because friend2's property is created when calling the constructor
// when resetting the prototype, it overwrites the prototype.

try
{
    friend2.sayName2();
}
catch (err)
{
    console.log(err.message + "\n");
    console.log("becasue property is created after instance. ");  
}

console.log("--- Combination Constructor/Prototype Pattern ---");

// The shared nature of prototypes makes them ideal for defining methods
// the constructor pattern defines instance properties
// the prototype pattern defines methods

function Person4(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Shelby", "Court"];
}

// Because instance of Person4 are each base references for their call to sayName
// the this value ia assigned to each instance respectively

Person4.prototype = {
    // prototype has a constructor property, otherwise it will be set as Object
    constructor: Person4,
    sayName: function() {
        console.log(this.name);
    }
};

var person4_1 = new Person4("Nick", 29, "Developer");
var person4_2 = new Person4("Greg", 38, "Doctor");

person4_1.friends.push("Van");

console.log(person4_1.friends);
console.log(person4_2.friends);

console.log(person4_1.friends == person4_2.friends);
console.log(person4_1.sayName == person4_2.sayName);

console.log("--- Dynamic Prototype Pattern ---");

function Person5 (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    // encapsulate all of the information within the constructor while
    // maintaining the benefits of the
    if (typeof this.sayName != "function") {
        Person5.prototype.sayName = function() {
            console.log(this.name);
        };
    }
}

var friend5 = new Person5("Nick", 29, "Manager");
friend5.sayName();

console.log("---Parasitic Constructor Pattern---");

// like factory pattern, but constructor return another object
// return object to overwrite the value from constructor

function Person6(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        console.log(this.name);
    };
    return o;
};

var friend6 = new Person6("Nick", 20, "Programmer");
friend6.sayName();

function SpecialArray() {
    var values = new Array();
    values.push.apply(values, arguments);
    values.toPipedString = function() {
        return this.join("|");
    };
    return values;
}

var colors = new SpecialArray("red", "blue", "green");
console.log(colors.toPipedString());

console.log("---Durable Constructor Pattern---");

function Person7(name, age, job) {
    var o = new Object();
    o.sayName = function() {
        console.log(name);
    };

    return o;
}

var friend7 = new Person7("Nick", 29, "Engineer");
friend7.sayName();
