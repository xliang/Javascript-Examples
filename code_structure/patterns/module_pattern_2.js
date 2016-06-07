// execute a function expression which returns an object containing all of the public members as its properties. 

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
// To do so we add a private variable ‘mem‘ and expose a function to retrieve data. 
// Any declared function or variable will be private unless we add it as a property to the returned public object.

CalcModule2 = (function(){
        var pub = {};
        var mem = new Array(); //private variable
                 
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
/*
	Separating Module across different JS files: Augmentation
	
	First things to notice in above code is passing of parameters into the module. 
	We pass the same javascript module ‘CalcModule’ as argument into the anonymous function 
	and which gets assigned to parameter ‘pub’. 
	Inside the function, we add properties to this parameter ‘pub’, 
	and then return the same variable which gets assigned back to CalcModule. 
	Thus, we managed to extend the existing CalcModule with new properties.

	Second thing to notice is the OR ( || ) condition in the call. 
	This is what makes above files independent of each other with respect to order of execution. 
	If the CalcModule doesn’t exists yet, a new object is created (using ‘{}’) and passed 
	to the parameter ‘pub’ which is then assigned to CalcModule. 
	This ability to allow loading of scripts in any order, converts a Strict Augmentation to Loosely Augmentation.

	This functionality to extend the module with other members is called Augmentation. 
	And if the order in which these modules are loaded is defined than its called a Strict Augmentation, 
	or else if the order is not important as in example above, it is called Loose Augmentation.

	A disadvantage of separating same module across different files is inability 
	to share private variables between files. 
	Above logic worked because we can pass the global variable CalcModule to different anonymous functions and add properties to it, but since CalcModule only exposes public APIs, different modules won’t be able share private members (remember private members are implemented using closures, and each anonymous function will have its own closure).

*/

/*

	// calc.js

	var CalcModule = (function($, pub){
	                        //jQuery will still be available via $
	                        var mem = new Array(); //private variable
	                         
	                        pub.storeInMemory = function(val){
	                                                mem.push(val);
	                                            };
	                         
	                        pub.retrieveFromMemory = function(){
	                                     return mem.pop();
	                       };
	 
	                       return pub;
	})(jQuery, CalcModule || {});

*/

/*
	// calc_functions.js 
	
	var CalcModule = (function($, pub){
                       //jQuery will still be available via $
                       pub.add = function(a,b){ 
                                     var result = a + b;
                                     pub.storeInMemory(result);
                                     return result;
                                  };
                        
                       pub.sub = function(a,b){
                                     var result = a - b;
                                     pub.storeInMemory(result);
                                     return result;
                                  };
                        
                       return pub;
	}(jQuery, CalcModule || {}));


*/

/*
	Revealing Module Pattern

	Notice the changes here, we are not creating a separate ‘pub’ variable 
	and then adding properties to it. But instead we define all the functions public or not in the same way, 
	and then in the return statement create a new object and add properties to it.

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

/*
Advantages of Revealing Module pattern

    1. Consistent coding style inside the module for both private and public members.
    2. Better control on the name of the public API, i.e., if it is required to change the name of add() method to addition(), all we need to do is change the name in the return statement without effecting the function name inside the module.
    3. Control on what to make public, just adding/removing the properties in return statement is sufficient.
    4. As always, cleaner code.


*/