/*
     Class-based vs. Prototype-based

     Class-based:     defines conceptually what it should look like (blue print)
                      

     Prototype-based: create concretely what it should look like  (the object itself)
                      JS's use of the new operator is a departure from its protoype-based roots. 
                      perhaps as an attempt to make it more comprehensible to developers familiar 
                      with class-based inheritance. 

                      * new
                      * Object.Create


    Thus, a class-based OO language has a dual nature that requires at least two fundamental constructs: 
    classes and objects. 
    
    As a result of this duality, as class-based software grows, complex class hierarchies tend to develop. 
    It's generally impossible to predict all the ways classes will need to be used in the future, 
    so the class hierarchy needs to be constantly refactored to facilitate changes.

    Prototype-based languages eliminate the need for the above-mentioned duality and 
    facilitate the direct creation and manipulation of objects. 
    Without objects being bound by class, more loosely bound systems of objects 
    can be created that help to maintain modularity and reduce the need for refactoring. 

 -- prototype 

    the prototype relationships of JavaScript objects from a tree-shaped structure, and at the root of 
    this structure sits Object.protptype
    
    All javascript objects inherit the properties and methods from their prototype 
    Object created using object literal, or with new Object(), inherit from a prototype called Object.prototype. 
    Object created with new Date, inherit the Date.prototype
    Object.prototype is top of the prototype chain. 

    Many objects don’t directly have Object.prototype as their prototype, but instead have another object, 
    which provides its own default properties. 

    Functions derive from Function.prototype, and arrays derive from Array.prototype.

    Each function is created with a prototype property, which is an object containing properties
    and methods that should be available to instances of a particular reference type.
    This object is literally a prototype for the object to be created

    __proto__ is supported in some JavaScript engine. This property allows you to read and write
    to [[prototype]] property. 

    !!! once the constructor is called !!!
    
    ** 
    prototype property is an object containing properties and
    methods that should be available to instances of a particular reference type
    ** 
    
    prototype objec is different from constructor, the method and properties in the prototype object, 
    isn't as same as Constructor's

    The benefit of using the prototype is that all of its properties and methods
    are shared among object instances. Instead of assigning object information
    in the constructor, they can be assigned directly to the prototype, as in this example
    
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

    Since constructor is not really a class, it’s important to understand what a call to a constructor does. 

    1. It first creates an empty object, 
    2. then sets the prototype of this object to the prototype property of the constructor, 
    3. then calls the constructor function with this pointing to the newly-created object, 
    4. and finally returns the object. 

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
    if "new" is omitted, the object returned is not "Shape", instead, it is window object 

    The issue of constructor:

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

    0. it makes it easy to create multiple objects with the same properties and methods. 
    1. By convention, constructor functions always begin with a uppercase letter
    2. constructor use "this"
    3. no return statement
    4. no object being created explicitly. 
    5. the properties and methods are assigned directly onto this object. 
    6. There is no return statement

*/
 
// In class-based system, we define blueprints.  

console.log("--- prototype chain ---"); 

function Shape(color, borderThickness) { 
    this.color = color;
    this.borderThickness = borderThickness;
}

var shape = new Shape('red', 2); 

// the first thing "new" keyword does is construct an object 
// with its internal prototype set to the prototype of constructor function 

/*

A new instance of an object is created and its prototype (exposed via the __proto__ property)
is set to the prototype of the constructor function.

The problem here is that there are two different prototype being discussed. On eis the 'real'
prototype, the one that determine the type of an object, the other is simply the prototype property 
of the constructor function. These are two very different things that unfortunately share the same 
name. Personally, it would be a lot less confusing if the prototype property were called something 
like 'constructedObjectsPrototype'. Verbose, but much more clear. 

*/

// Shape.prototype is an object (not a function) created in memory when new is called 
// onto the constructor

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
