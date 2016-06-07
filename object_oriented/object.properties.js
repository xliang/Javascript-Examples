/**
 * Created by Owner on 6/24/2014.
 */

// ECMA Script has no concept of classes, and therefore object are different than class-based language

// object as an unordered collection of properties each of which contains a primitive
// value, object, or function

// object is an array of values in no particular order.
// Each property or method is identified by a name that is mapped to a value.
// it is help to think of objects as hash tables. nothing more than a grouping of
// name-value pairs where the value may be data or a function

console.log("-- Object Constructor --");

var person = new Object();
person.name = "Nick";
person.age = 29;
person.sayName = function() {
    console.log(this.name);
};

person.sayName();

console.log("-- Object Literals -- ");

var person1 = {
    name: "Nick",
    age: 29,
    job: "Software Engineer",

    sayName: function() {
        console.log(this.name);
    }
};

person1.sayName();

console.log("---Array Literal---");

var colors = ["red", "blue", "green"];

var colors_2 = new Array("red", "blue", "green");

console.log("---Data Properties---");

var person2 = {};
Object.defineProperty(person2, "name", {
    configurable: false,
    writable: false,
    value: "Nicholas"
})

console.log(person2.name);

console.log("--- Detecting Properties using in --- ");
// Since property can be added/removed, it is necessary to check
// whether a property exists

console.log("person1 contain name property: ");
console.log("name" in person1);

// method are just properties that reference functions, so you can check
// its existence.

console.log("person1 contain sayName method:  ");
console.log("sayName" in person1);

console.log("--- Detecting Properties using hasOwnProperty --- ");

console.log(person1.hasOwnProperty("name"));
console.log(person1.hasOwnProperty("toString"));


// there have two types of properties, data property and accessor property
// Data property contains value
//
console.log("---Accessor Properties--");

// need to define the object first
var book = {
    _year: 2004, // common notation to indicate that a property is not intended to be accessed.
    edition: 1
};

// create an accessor property
Object.defineProperty(book, "year", {
    get: function() {
        return this._year;
    },
    set: function(newValue) {
        if (newValue > 2004) {
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
});

book._year = 2003;
book.year = 2005;
console.log(book.edition);

console.log("---Defining Multiple Properties---");

var book2 = {};

Object.defineProperties(book2, {

    // Data Properties
    _year: {
        value: 2004
    },
    edition: {
        value: 1
    },

    // Accessor property
    Year: {
        get: function () {
            return this._year;
        },

        set: function(newValue) {
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});

