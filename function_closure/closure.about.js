

/*
    ==== What is Closure ===
	A closure is the process of preventing the garbage collector from 
	removing a variable from memory by keeping access to the variable outside the execution 
	context in which it created. 

	A closure is created by taking a function that has access to a variable in 
	the current execution context and saving it to a variable outside of the current execution context. 

	var prison = {
		names: 'Mike Mikowski and Josh Powell',
		who: function () {
			var that = this;
			$.ajax({
				success: function () {
				console.log( that.names );
				}
			});
		}
	};
	// outputs 'Mike Mikowski and Josh Powell'
	prison.who();
*/

/*
 ==== How Closure is implemented ==== 

A unique execution context object is created every thime 
a function is called. After the function completes, the execution 
object is immediately discarded unles the caller retains a reference to it. 

If a function return a number, you can't typicaly retain a reference to a function's
execution context object. On the other hand, if a function returns a more 
complex structure like, a function, an object, or an array, creating 
a reference to the execution context is often accomplished 
-- by storing the return value to a variable

In JavaScript, if you use the function keyword inside another function, you are creating a closure.
if you declare a function within another function, then the local variables can remain accessible 
after returning from the funciton calls. 

*/
