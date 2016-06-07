function closure () {
	var date = new Date(); 

	return function (){
		return console.log(date.getMilliseconds()); 
	}
}

// an execution context returned. 

var v1 = closure(); 


var millisecondsToWait = 500;

setTimeout(function() {
    // Whatever you want to do after the wait

    // create another funciton (execution context)
    var v2  = closure();  
    
    v2(); 

}, millisecondsToWait);


/*
	The result is same, becasue the variable date is captured (encapsulated)
	reference to the same closure (execution context)
*/

v1(); 
v1();
v1();

closure()();

setTimeout(function() {
    // Whatever you want to do after the wait

    // create another funciton (execution context)
   closure()();

}, millisecondsToWait);

