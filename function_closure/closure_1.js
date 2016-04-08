// A closure is an inner function that has access to the outer (enclosing) funciton's variables - scope chain

// A closure is created that encompasses a function declaration, but also ALL varialbes that 
// are currently in same scope (including before and after) at the point of declaration. 
// It creates a safety bubble. 

// Succinctly put, a closure is the scope created when a function is declared that allows the
// function to access and manipulate variables that are external to that function. 

// Put another way, closures allow a function to access all the variables, as well as other functions, 
// that are in scope when the function itself is declared.


// A closure lets you associate some data (the environment) with 
// a function that operates on that data. This has obvious parallel to 
// object oriented programming, where objects allow us to associate some 
// data with one or more methods.
// 
// We can use closure anywhere that you might normally use an object with
// only a single method.
// 
// Situations where you might want to do this are particularly common on the web. 
// Much of the code we write in web JavaScript is event-based — we define some behavior, 
// then attach it to an event that is triggered by the user (such as a click or a keypress). 
// Our code is generally attached as a callback: a single function 
// which is executed in response to the event.

// there have three ways to create closures

/*


*/

// Put closure to work 

// 1. private variable, Javascript has 

function Ninja() {                                              //#1

    // a variable to hold the state
    var feints = 0;                                             //#2

    this.getFeints = function(){                                //#3
          return feints;                                            //#3
    };                                                          //#3

    this.feint = function(){                                    //#4
          feints++;                                                 //#4
    };                                                          //#4
}

var ninja = new Ninja();                                      //#5

ninja.feint();                                                //#6
console.log(ninja.getFeints()); 

// 2. call back and timers

/*
    Closure is a excellent way to access data, especially, it helps avoiding create extra top-level
    variables to hold the data. 
*/

/* example of Jquery Ajax call 
    -- ?? 
    Within the arguments passed to the jQuery ajax() method, we define an anonymous
    function e to serve as the response callback. Within this callback, we reference the
    elem$ variable via the closure and use it to stuff the response text into the <div>.

    <script>
      jQuery('#testButton').click(function(){                          //#1

        var elem$ = jQuery("#testSubject");                            //#2

        elem$.html("Loading...");                                      //#3

        jQuery.ajax({
          url: "test.html",
          success: function(html){                                     //#4
            assert(elem$,
                  "We can see elem$, via the closure for this callback.");
            elem$.html(html);
          }
        });

      });
    </script>

*/

// Important rules for closure

//  1. Closure have access to the outer function's variable even
//  after the outer function returns. 

//  2. Closure store reference to the outer function's variables.
//  they don not store the actual value. Closure get more interesting 
//  when the value of the outer function's variable changes before 
//  the closure is called. 

// Save variables for use when an Ajax call returns. 

var prison = {
    names: 'Mike Mikowski and Josh Powell',
    who: function (){
    return this.names;
    }
};

prison.who(); 

var prison2 = {
    names: 'Josh Powell and MikeMikowski',
    who: function (){
        
        $.ajax({
            success: function () {
                console.log( this.names );
            }
        });
    }
};

// output undefined, "this is the ajax object"
// prison.who(); 

var prison3 = {
    names: 'Josh Powell and MikeMikowski',
    who: function (){
        var that = this; 
        $.ajax({
            success: function () {
                console.log( that.names );
            }
        });
    }
}; 

// outputs 'Mike Mikowski andJosh Powell'
// prison.who();

// a closure lies with execution context objects. 
// 

/*

    We must remember that a unique execution context object is created every time a
    function is called. After the function completes, the execution object is immediately
    discarded unless the caller retains a reference to it. If a function returns a number, you
    can’t  typically  retain  a  reference  to  a  function’s  execution  context  object.  On  the
    other hand, if a function returns a more complex structure like a function, an object,
    or  an  array,  creating  a  reference  to  the  execution  context  is  often  accomplished—
    sometimes mistakenly—by storing the return value to a variable.
 
 */

var menu, outer_function,
    food= 'cake';

outer_function = function (){

    var fruit, inner_function;
    fruit = 'apple';

    inner_function = function() {
        return { food: food, fruit: fruit };
    }

    return inner_function;
};

menu= outer_function();
// returns { food: 'cake',fruit: 'apple' }
menu();

/*

When  outer_function is  executed,  it  creates  an  execution  context.
inner_functionis defined inside of that execution context
Because inner_functionis defined inside the outer_functionexecution context,
it has access to all of the variables in scope in outer_function—in this case food,
fruit, outer_function, inner_function, and menu.

When outer_functionis finished executing, you might expect everything inside of
that execution context to be destroyed by the garbage collector. You’d be wrong.
It’s not destroyed because a reference to the inner_functionhas been saved in
the global scope in the variable menu. Because the inner_functionneeds to retain
access to all of the variables that were in scope where it was declared, it “closes over” 
the outer_functionexecution context to prevent the garbage collector from
removing it. 

This is a closure.

*/

function makeAdder(x) {
	return function (y) {
		return x + y; 
	}
}

// closure 
var add5 = makeAdder(5); 
var add10 = makeAdder(10); 

console.log (add5(2)); 
console.log (add10(2)); 

// 
var counter = (function () {
	var privateCounter = 0; 

	function changeBy(val) {
		privateCounter += val; 
	}

	return {
		increment: function() {
			changeBy(1); 
		},
		decrement: function() {
			changeBy(-1); 
		},
		value: function() {
			return privateCounter; 
		}

	}; 
})(); 

console.log(counter.value()); 
counter.increment(); 
counter.increment(); 
console.log(counter.value()); 
counter.decrement(); 
console.log(counter.value()); 

//

function createComparisonFunction(propertyName){

    return function (object1, object2) {
        // accessing a variable propertyName, even the inner function is return
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];

        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    };
}

// Scope chain , important for a good understanding of closure

// 1. When function is called, an execution context is created. and its scope chain is created.
// 2. The activation object for the function is initialized
// 3. The outer function's activation object is second object in the scope chain
// 4. This process continues for all containing functions until the scope chain terminates
//    with the global execution context.

// whenever a variable is accessed inside a function, the scope chain is searched for a variable
// with the given name. Once the function has completed, the local activation object is destroyed
// leaving only the global scope in memory.


console.log("--- return a closure, passing by reference---");

function createFunctions1() {
    var result = new Array();

    for(var i = 0; i < 10; i++) {
        result[i] = function() {
            return i;
        };
    }

    return result;
}

var resultValue1 = createFunctions1();

for (var i = 0; i < resultValue1.length; i++) {
    console.log(resultValue1[i]());
}

console.log("--- return a closure, passing by variable---");

function createFunctions2() {
    var result = new Array();

    for (var i = 0; i < 10; i++) {
        // create another anonymous function
        result[i] = function(num) {
            return function() {
                return num;
            };
        }(i);
    }

    return result;
}

var returnResult2 = createFunctions2();

for (var i = 0; i < returnResult2.length; i++) {
    console.log(returnResult2[i]());
}


//
(function (){
    // block code here...
})();

(function() {
    var now = new Date();
    if (now.getMonth() == 0 && now.getDate() == 1) {
        console.log("Happy New Year..")
    }
})();

console.log("---priviledged method---");
function Person(name) {
    this.getName = function() {
        return name;
    };

    this.setName = function(value) {
        name = value;
    };
}

var person = new Person("Nick");
console.log(person.getName());
person.setName("Greg");
console.log(person.getName());

console.log("--- Static Private Variables --- ");

(function(){
    var name = "";

    Person2 = function(value) {
        name = value;
    };

    Person2.prototype.getName = function() {
        return name;
    };

    Person2.prototype.setName = function(value) {
        name = value;
    }
})();

var person2_1 = new Person2("Nick");
console.log(person2_1.getName());
person2_1.setName("Greg");
console.log(person2_1.getName());

var person2_2 = new Person2("Mike");
console.log(person2_2.getName());
console.log(person2_1.getName());

console.log("--- singleton ---");


// var singleton = {
//    name: value,
//    method: function () {
        // method code here...
//    }
//}


var singlton = function() {

    var privateVariable = 10;

    function privateFunction() {
        return false;
    }

    return {
        publicProperty: true,
        publicMethod: function() {
            privateVariable++;
            return privateFunction();
        }
    }
};

/*
var application = function(){
    //private variables and functions

    var components = new Array();

    //initialization
    components.push(new BaseComponent());

    //public interface
    return {
        getComponentCount : function(){
            return components.length;
        },
        registerComponent : function(component){
            if (typeof component == "object"){
                components.push(component);
            }
        }
    };
}();
*/

// Module-Augmenttation Pattern

function BaseComponent(){
}
            
function OtherComponent(){
}

function CustomType () {

}

// return custom type
var singleton2 = function(){
    //private variables and functions
    var privateVariable = 10;
    function privateFunction(){
        return false;
    }
    //create object
    var object = new CustomType();
    //add privileged/public properties and methods
    object.publicProperty = true;
    object.publicMethod = function(){
        privateVariable++;
        return privateFunction();
    };
//return the object
    return object;
}();

// return BaseComponent instance

var application = function(){
    //private variables and functions
    var components = new Array();

    //initialization
    components.push(new BaseComponent());

    //create a local copy of application
    var app = new BaseComponent();

    //public interface
    app.getComponentCount = function(){
        return components.length;
    };

    app.registerComponent = function(component){
        if (typeof component == "object"){
            components.push(component);
        }
    };
//return it
    return app;
}();

// 

var application2 = function(){
            
                //private variables and functions
                var components = new Array();
            
                //initialization
                components.push(new BaseComponent());
            
                //public interface
                return {
                    getComponentCount : function(){
                        return components.length;
                    },
            
                    registerComponent : function(component){
                        if (typeof component == "object"){
                            components.push(component);
                        }
                    }
                };
}();
