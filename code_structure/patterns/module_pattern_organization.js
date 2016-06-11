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
