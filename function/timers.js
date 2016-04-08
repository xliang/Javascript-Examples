
/*
	setTimeout
	execute some code after a specified amount of time. 
	reschedule itself every ... seconds. 

	If a timer is blocked from immediately executing, it will be delayed until the
	next available time of execution (which may be longer, but never shorter, than
	the specified delay).

	1. the code to execute
	2. number of time (in milliseconds) to wait before attempting to execute the code. 

*/

/*

	Why is this useful? By enforcing a timeout (however small) 
	you remove the function from the current execution queue and hold it back until the browser is not busy.

	Intervals may end up executing back to back with no delay if they get backed up
	enough, and multiple instances of the same interval handler will never be
	queued up.

	The most obvious benefit is that you can make long running functions 
	(on which no other immediate function is dependent) defer execution until more urgent 
	routines have completed. 

*/
var timeoutId = setTimeout(function () {
	console.log("Hello"); 
}, 2000); 


// setInterval()

/*

attempt to execute every ... seconds. 

The browser will
not queue up more than one instance of a specific interval handler.

You can think of it like a train line. 
For nested setTimeouts with delays set to 1000ms, trains will run at a minimum of 1000ms apart. 
However when using setInterval every train will leave the station at precise 1000ms intervals even if a train is delayed ahead. Thus trains (or functions) can end up running back to back.


*/


var num = 0;
var max = 10;
var intervalId = null;
function incrementNumber() {
	console.log("doing"); 
	num++;
	 //if the max has been reached, cancel all pending executions
	if (num == max) {
	 clearInterval(intervalId);
	 	console.log("Done");
	 }
}
intervalId = setInterval(incrementNumber, 500);


console.log(1);
setTimeout(function() {console.log(2)},1);
console.log(3);
console.log(4);
console.log(5);

var recurse = function() {
    console.log(+new Date);
    if (recurse.counter++ == 4) {
        recurse = function() {}; //quit
    }
    setTimeout(recurse,10);
    var i = 0;
    //waste some time
    while (i++ < 10000) {
    }
}
 
recurse.counter = 1;
 
recurse();