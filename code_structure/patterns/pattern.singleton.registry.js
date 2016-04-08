// http://codereview.stackexchange.com/questions/15166/organizing-javascript-code-for-a-website

// option 1 

(function(exports){

    var registry = []; //collection of module

    //adds module to collection
    exports.register = function(moduleDeclaration){
        registry.push(moduleDeclaration);
    }

    //executes every module
    exports.init = function(){
        var registryLength,i;

        registryLength = registry.length

        //loop through each module and execute
        for(i=0;i<registry.length;i++){
            registry[i].call(this);
        }
    }

//use existing namespace or make a new object of that namespace
}(window.Lib = window.Lib || {}));

//To register a module
Lib.register(function(){
    //do what you have to do here
});

//executing the init
Lib.init();

// Option 2 

var registry = {}

exports.register = function(name,declaration){
    registry[name] = declaration;
}

exports.init = function(){
    var module,i;

    registryLength = registry.length

    //loop through each module and execute
    for(name in registry){
        if(registry.hasOwnProperty(name)){
            registry[name].call(this);
        }
    }
}

exports.getModule = function(moduleName){

    //default to undefined
    var module;

    //if module exists, assign
    if(registry.hasOwnProperty('moduleName')){
        module = registry[moduleName];
    }

    return module
}

//to register a module
Lib.register('moduleName',function(){
    //module code
});

// How to use it

(function(exports){
	
	var initialized,
	registry = []; // Collection of module.
	
	// Adds module to collection:
	exports.register = function(moduleDeclaration) {
		
		registry.push(moduleDeclaration); // Add module to registry.
		
		if (initialized) moduleDeclaration.call(this); // If lib already initialized, register and execute module immediately.
		
	};
	
	// Executes every module:
	exports.init = function() {
		
		initialized = true; // Flippin' switches!
		
		// Loop through each module and execute:
		for (var i = 0, l = registry.length; i < l; i++) {
			
			registry[i].call(this); // Call and execute module.
			
		}
		
	};
	
}(window.Lib = window.Lib || {})); // Use existing namespace or make a new object of that namespace.

//--------------------------------------------------------------------

/**
 * Register a new module.
 */

Lib.register(function() {
	
	var weather = {
		
		init : function() {
			
			var $weather = $('#weather'); // Example using jQuery.
			
			console.log('Weather\'s length:', $weather.length);
			
			// Do more stuff here...
			
		}
		
	}; // weather
	
	weather.init();
	
});

//--------------------------------------------------------------------

/**
 * Register a new module.
 * Just testing the waters.
 */

Lib.register(function() {
	
	// http://www.hardcode.nl/subcategory_1/article_526-singleton-examples-in-javascript.htm
	var Singleton = (function() {
		
		var instantiated;
		
		function init() {
			
			// All singleton code goes here:
			
			return {
				
				publicWhatever : function() {
					
					console.log('whatever');
					
				},
				publicProperty : 2
				
			};
			
		}
	 
		return {
			
			getInstance : function() {
				
				if ( ! instantiated) instantiated = init();
				
				return instantiated;
				
			}
			
		};
		
	})();
	 
	// To call public methods now use:
	Singleton.getInstance().publicWhatever();
	
});

//--------------------------------------------------------------------

$(document).ready(function() {
	
	/**
	 * Executing the init.
	 */
	
	Lib.init();
	
	//----------------------------------
	
	/**
	 * Register a new module.
	 * Testing "after" init.
	 */
	
	Lib.register(function() { console.log('After init...'); });
	
});