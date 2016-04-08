console.log("--- Object Constructor ---"); 

var mango2 =  new Object ();
mango2.color = "yellow";
mango2.shape= "round";
mango2.sweetness = 8;

mango2.howSweetAmI = function () {
    console.log("Hmm Hmm Good");
}; 

console.log("--- Constructor Pattern ---");
/*
    Any function is called with new operator acts as a constructor, whereas any function 
    called without it acts just as a normal function. 

    It is possible to define custom constructors that define properties and methods 
    for your own type of objects. 

    function used by new is treatied as constructor
    Constructor function is just regular funciton, only the new does the magic

     what exactly does the new keyword do? When a function is invoked using new,
    the following occurs:

    1. A new instance of an object is created and its prototype
       (exposed via the __proto__ property) 
       is set to the prototype property of the constructor function.
    2. The constructor function is invoked 
        with the newly created object bound to the this property.
    3. If the function does not return a value, "this" is returned implicitly.
    
    function Shape(color, borderThickness) { 
        this.color = color;
        this.borderThickness = borderThickness;
    }

    Shape.prototype.describe = function() {
        console.log("I am a " + this.color + " shape, with a border that is " +
            this.borderThickness + " thick");
    }; 

    var notAShape = Shape('red', 2.0); 
    -> undefined. 

     !! Because the Shape constructor function lacks an explicit return !!

     the function doesn't return anything and the notAShape variable is undefined.

     Well, that's easily fixed:

        function Shape(color, borderThickness) { 
            this.color = color;
            this.borderThickness = borderThickness;
            return this;
        } 

    constructor functions must be invoked via the new keyword or Bad Things will happen.
    This fragility, where a developer can easily forget to use the new keyword, 
    is of concern to JavaScript developers, which is why convention dictates that constructor functions 
    should start with capital letters as a reminder of their purpose.

    Constructor Method vs Instance Method 
    
    a. Properties are bound to the object instance from prototype 
    b. Properties are added to the object instance with Constructor function 

    Binding operations within the constructor always take precedence over those in the prototype. 

    The point is that property references are resolved in the object first, defaulting to
    inspecting the prototype only if that fails.

    The take-home message from this section is that constructor functions are just regular functions. 
    There is nothing special about them. It is the new keyword that does all the magic. 

*/

/*
    0. it makes it easy to create multiple objects with the same properties and methods. 
    1. By convention, constructor functions always begin with a uppercase letter
    2. constructor use "this"
    3. no return statement
    4. no object being created explicitly. 
    5. the properties and methods are assigned directly onto this object. 
    6. There is no return statement

*/


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



