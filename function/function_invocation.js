/*

	How to invoke a function 
	a. Invoke as a function, using () operator 

		function ninja () {}; 
		ninja(); 
		
		When invoked in this manner, the function context is the global context - the window object. 
	b. invocation as a method 
		var o = {};
		o.whatever = function(){};
		o.whatever();
	
		When we invoke the function as the method of an
		object, that object becomes the function context and is available within the function
		via the this parameter. This is one of the primary means by which JavaScript allows
		object-oriented code to be written.

		!! It means that we can, within any method, use this to reference the method’s owning
		!! object—a fundamental concept in object-oriented programming.
		
	c. Invocation as a constructor

		To invoke the function as a constructor, we precede the function invocation with the
		new keyword.

		function creep(){ return this; }
		new creep(); 

		Things happen when invoking as a constructor 

		1. A new empty object is created.
		2. This object is passed to the constructor as the this parameter, and thus
		becomes the constructor’s function context.
		3. In the absence of any explicit return value, the new object is returned as the
		constructor’s value.

		The purpose of a constructor is to cause a new object to be created, to set it up, 
		and to return it as the constructor value. Anything that interferes with that intent 
		isn’t appropriate for functions intended for use as constructors.

		Functions and methods are generally named starting with a verb that describes
		what they do (skulk(), creep(), sneak(), doSomethingWonderful(), and so on) and start
		with a lowercase letter. Constructors, on the other hand, are usually named as a noun
		that describes the object that’s being constructed and start with an uppercase character; 
		Ninja(), Samurai(), Ronin(), KungFuPanda(), and so on.

	d. Invocation with the apply and call

		function forEach(list,callback) {
			 for (var n = 0; n < list.length; n++) {
				 callback.call(list[n],n);
			 }
 		}

		var weapons = ['shuriken','katana','nunchucks'];
		
		forEach(
			 weapons,
			 function(index){
			 	assert(this == weapons [index],
			 	"Got the expected value of " + weapons [index]);
			 }
		);

		We use the call() method of the callback function, passing the current iteration
		entry as the first parameter and the loop index as the second. This should cause the
		current entry to become the function context and the index to be passed as the single
		parameter to the callback.

*/