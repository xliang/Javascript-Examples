// Definition of module pattern: 

//The module pattern overcomes some of the limitations of the object literal, 
// offering privacy for variables and functions while exposing a public API if desired.

// it is a anonymous function, execute immediately. 
// All of the code run inside of the function 
// lives in a closure, which provides privacy and state throughout the life time of the application. 


(function () {

	//create variable
  //var name = "rupesh";
  
  //create method
  //var sayName = function ( ) {
  //    alert(name);
  //};

}()); //calling this method. 

// passing global as parameters to the functions 

(function ($, YAHOO) {

}(jQuery, YAHOO)); 



// Add private variables 

// Single Global Variable "Module", exposed to the document

var Module = ( function ( ) {

	// private ... 
    var privateVariable = "some priviate value",
        privateMethod = function ( ) {
			//do something.
	};
    
 //returning one anonymous object literal that would expose privileged methods.
  return {

         //the method inside the return object are 
         //called as privileged method because it has access 
         //to the private methods and variables of the module.

         privilegedMethod : function ( ) {

            //this method can access its private variable and method 
            //by using the principle of closure.  

            console.log("outputting " + privateVariable); //accessing private variable.

            privateMethod( ); //calling private method
        }
    };

})( ); 

console.log(Module.privilegedMethod());

// Extending Module pattern

var Module1 = ( function (oldModule) {
    var 
	     //assigning oldmodule in to a local variable.
	     parent = oldModule;
	
        //overriding the existing privileged method.
        parent.privilegedMethod = function ( ){
         //do something different by overriding the old method.
    };
	
    //private method accessing privileged method of parent module.
    var privateMethod2 = function ( ) {
        parent.privilegedMethod();//can access privileged method of Module
        parent.publicMethod1(); //can access public method of Module
    }
    return {
        newMethod : function ( ) {
          ///do something for this brand new module.
          ///use some functionality of parent module.
          /// parent.privilegedMethod( );
        }
    };

} )(Module);//Module object is the existing module that I want to extend. 


// object literal bolt the private methods on it. 
// Module pattern can define private stuff locally, and only return the "Good Part"

var feature = (function() {

	var privateThing = "secret"; 
	var publicThing = "not secret"; 

	var changePrivateThing = function() {
		privateThing = "super secret"; 
	}; 

	var sayPrivateThing = function() {
		console.log(privateThing); 
		changePrivateThing(); 
	}

	return {
		publicThing : publicThing,
		sayPrivateThing: sayPrivateThing
	}; 


})(); 

console.log(feature.publicThing); 
console.log(feature.sayPrivateThing()); 

var prison = (function () {

	var prisoner_name = 'Mike Mikowski',
	jail_term = '20 year term';

	return {
		prisoner: prisoner_name + '- ' + jail_term,
		sentence: jail_term
	};
})();

// this isundefined, no prisoner_name for you.
// console.log( prison.prisoner_name );

// this outputs 'Mike Mikowski- 20 year term'
console.log( prison.prisoner );
// this outputs '20year term'
console.log( prison.sentence ); 

// Master module pattern 

// 1. anonymous object literal return 
var Module = (function() {

	var privateMethod = function () {
		// do something 
	}; 

	return {
		publicMethod: function() {
			// code; 
		}
	}; 

})(); // Immediate-invoked-Function-Expression  
      // create new scope and creates "privacy"
      // To return only the parts we needs, leaving 
      // the other code out of the global scope. 


// 2. locally scoped object literal
var Module = (function () {

  // locally scoped Object
  var myObject = {};

  // declared with `var`, must be "private"
  var privateMethod = function () {};

  myObject.someMethod = function () {
    // take it away Mr. Public Method
  };
  
  return myObject; // only the object send back, not the name

})();


// execute a function expression which returns an object 
// containing all of the public members as its properties. 

CalModule = (function(){

  var pub = {}; 

  // public 
  pub.add = function (a, b) {
    console.log('in add() ', a, b); 
      return a + b; 
  }; 

  // public 
  pub.sub = function (a, b) {
    console.log('in sub() ', a, b); 
    return a - b; 
  }; 

  return pub; 

})(); 

var result = CalModule.add(5, 2); // no new constructor 
console.log(result); 

// private member inside a module were created using closure. 
// module is created by using anonymous function expression 
// Lets give our calculator the ability to store results in its memory. 
// To do so we add a private variable 'mem' and expose a function to retrieve data. 
// Any declared function or variable will be private 
// unless we add it as a property to the returned public object.

CalcModule2 = (function(){
        var pub = {};
        var mem = new Array(); //private variable caching 
                 
        var storeInMemory = function(val) {  //private function
                            mem.push(val);
                    };
             
        pub.add = function(a, b) { 
                     var result = a + b;
                     storeInMemory(result); //call to private function
                     return result;
                  };
 
         pub.sub = function(a, b) {
                     var result = a - b;
                     storeInMemory(result); //call to private function
                     return result;
                  };
 
         pub.retrieveFromMemory = function() {
                     return mem.pop();
                 };
 
               return pub;
})();

CalcModule2.add(2,10);
CalcModule2.add(5,15);

console.log(CalcModule2.retrieveFromMemory()); //outputs 20
console.log(CalcModule2.retrieveFromMemory()); //outputs 12

// pass parameters in the module during its initialization 

/*
CalcModule = (function($){
                       var pub = {};
                       var INVALID = 'invalid input';
                       pub.add = function(a,b){
                                     if($.isNumeric(a) && $.isNumeric(b)){
                                         return a+b;
                                     }
                                     else{
                                         return INVALID;
                                     }
                       };
                        
                       pub.sub = function(a,b){
                                     if($.isNumeric(a) && $.isNumeric(b)){
                                          return a-b;
                                     }
                                     else{
                                         return INVALID;
                                     }
                       };
                        
                       return pub;
                       
})(jQuery); //passed 'jQuery' global variable into local parameter '$'

*/


// 3. Revealing Pattern

// we reveal public pointers to methods inside 
// the Module's scope. 
// This again, can create a really nice code management system 
// in which you can clearly see and define which methods are shipped back to the Module:

var Module = (function () {

  var privateMethod = function () {
    // private
  };

  var someMethod = function () {
    // public
  };

  var anotherMethod = function () {
    // public
  };
  
  return {
    someMethod: someMethod,
    anotherMethod: anotherMethod
  };

})();

/*
  Revealing Module Pattern

  Notice the changes here, we are not creating a separate ‘pub’ variable 
  and then adding properties to it. But instead we define all the functions public or not in the same way, 
  and then in the return statement create a new object and add properties to it.

  The Revealing Module pattern came from the fact that we need to repeat the name of 
  the main object when we want to call a public method from another or access public variables. 
  Another problem is, if the Module code is too large it is difficult to see 
  which methods or variables are public and which are not. 
  As a result an updated pattern comes into play where we would simply define all of our functions and variables in private scope and return an anonymous object with pointers to the private functionality we wished to reveal as public.

  

The split between public and private members is still the same, 
but this time it’s implemented not by the original syntax used to define those members, 
but simply by what’s returned. 
This makes the revealing module pattern a useful variant, 
because it allows for an internally consistent style of coding. 
It also means you can change the names of public members when they’re returned, 
and even change at any time which members will be public at all.

*/

/*
Advantages of Revealing Module pattern

    1. Consistent coding style inside the module for both private and public members.
    2. Better control on the name of the public API, i.e., if it is required to change the name of add() method to addition(), all we need to do is change the name in the return statement without effecting the function name inside the module.
    3. Control on what to make public, just adding/removing the properties in return statement is sufficient.
    4. As always, cleaner code.


*/

CalcModule3 = (function(){
            var mem = new Array(); //private variable
 
            var storeInMemory = function(val) {  //private function
                mem.push(val);
            };
 
            var add = function(a, b) { 
                        var result = a + b;
                        storeInMemory(result); //call to private function
                        return result;
                    };
 
            var sub = function(a, b) {
                        var result = a - b;
                        storeInMemory(result); //call to private function
                        return result;
                    };
 
            var retrieveFromMemory = function() {
                        return mem.pop();
                    };
 
            return {
                add: add,
                sub: sub,
                popMemory: retrieveFromMemory
            };
})();

