/*
	JavaScript module pattern vs Constructor 
    with methods defined in constructor

    Module pattern is typically used for namespacing, 
    where have a a single instance acting 
    as a store to group related functions and objects. 
*/

// module pattern 

var module = (function () {
    // private variables and functions
    var foo = 'bar';

    // constructor
    var module = function () {
    };

    // prototype
    module.prototype = {
        constructor: module,
        something: function () {
        	console.log("get somthing ... "); 
        }
    };

    // return module
    return module;
    
})();

var my_module = new module();

my_module.something(); 

// constructor pattern

function Module2(){

    // private variables and functions
    var foo = 'bar';

    //public methods
    this.something = function () {
    	console.log("get somthing too ... "); 
    }        
}

var my_module2 = new Module2();

my_module2.something(); 

/*
	To me the end result is pretty much the same. 
	Both can have public properties and methods, 
    both can have "private" variables and methods 
    which can be accessed by the public methods.

	!!!

	In the first example, foo will be a static variable common to all instances of module().
    Meaning, all instances will reference the same variable.

	In the second example, foo is different for each Module() instance.

	Apart from that, I don't see any difference.


*/