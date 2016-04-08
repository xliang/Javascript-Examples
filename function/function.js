/**
 * Created by Owner on 6/18/2014.
 * 1. Function Declaration vs. Function Expression
 * 2. Function as Values
 */

// function declaration
// function declaration is hoisted, moving to the beginning of the context

function addValue (num1, num2) {
    return num1 + num2;
}

console.log((typeof addValue));

// function is an object, function name is the pointer to the function, not tied to function itself
// it is possible to have multiple names for a single function

function sum (num1, num2) {
    return num1 + num2;
}

console.log(sum(10, 10));

var anotherSum = sum; // point anotherSum with sum

console.log(anotherSum(10, 10));

// function expression

var sumFunction = function (num1 , num2) {
    return num1 + num2;
};

// those two function are equal

// Function Declarations are read and available in an execution context before any code is executed
// sum(10, 10);

// important difference:
// function declaration hoisting to the top of the context
// function declarations are read before the code executes.

/*
    function foo() {
        bar();  // OK, bar is hoisted
         function bar() {
        ...
        }
    }

    function foo() {
         bar();  // OK, bar is hoisted
         function bar() {
         ...
        }
    }
*


function addSomeNumber(num) {
    return num + 100;
}

// Function Expression, is part of an initialization statements
// not part of a function declaration.

// create an anonymous function

var addSomNumber = function(num) {
    return num + 100;
};

// recursive function

// function using arguments.callee

function factorial (num) {
    if (num <= 1)
    {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }

};


console.log("--- function this ---");

// window.color = "red"; -- error using window
var o = {color: "blue"};

function sayColor() {
    // this depends on the execution context
    console.log(this.color);
}

sayColor();

o.sayColor = sayColor;
o.sayColor();

console.log("-- function caller -- ");

function outer() {
    inner();
}

function inner() {
    console.log(inner.caller);
}

// Function as values

console.log("--- Function as Values ---");

var sayHi = new Function("console.log(\"Hi!\"); ");

sayHi();

var sayHi2 = sayHi;
sayHi2();

// Parameters
// function parameters are actually stored as an array-like structure called arguments

// A function is a object

console.log("--- Function overloading --- ");

// Function overloading
// Since javascript functions can accept any number of parameters, and the types of
// parameters a function takes aren't specified at all. That means javascript function
// don't have actually signatures
// A lack of function signature also means a lack of function overloading.

function sayMessage(message) {
    console.log(message);
}

function sayMessage() {
    console.log("default message.");
}

sayMessage("Hello!");

console.log("--- Function Overloading Mimic --- ");

function sayMessage2(message) {
    if (arguments.length == 0) {
        message = "Default message";
    }

    console.log(message);
}

sayMessage2("Hello from mimicing function overloading...");

console.log("--- function Call to manipulate this --- ");

function sayNameForAll(label) {
    console.log(label + ": " + this.name);
}

var person1 = {
    name: "Nicholas"
};

var person2 = {
    name: "Greg"
};

var name = "Michael";

sayNameForAll.call(this, "global");
sayNameForAll.call(person1, "person1");
sayNameForAll.call(person2, "person2");

console.log("--- function apply () to manipulate this ---");

sayNameForAll.apply(this, ["global"]);
sayNameForAll.apply(person1, ["person1"]);
sayNameForAll.apply(person2, ["person2"]);

console.log("--- function bind() to manipulate this ---");

console.log("--- self-executing anonymous functions ---"); 

