var Test = function () {
	var counter = 0; 
	function init () {
		console.log(counter); 
	}

	return {
		counter : counter, // not created a closure
		init: init
	}
}

var test_1 = new Test(); 
var test_2 = new Test(); 

console.log(test_1.counter ); 
console.log(test_2.counter); 

test_1.counter = 5; 
test_2.counter = 10; 


console.log(test_1.counter ); 
console.log(test_2.counter); 

test_1.init(); 
test_2.init(); 

/*
Scalar typed variables are passed by value rather than by reference. 
So return { counter: counter, ... } just copies current var counter value and changing this.counterdoes not affect var counter

This is what happened:

    the init() function made a closure on the counter variable, which is defined inside Test scope, holding a reference to it.
    the return from the Test() function created a new object, with another variable counter, set to value of internal counter.
    You update that 'another' counter, by setting test1.counter = X, but the init() still holds a reference to original variable.

That's why you see the old value.

*/


var Test2 = function() {
    var counter= 0;

    function init() {
        console.log(counter);
    }
    function changeNum(n){
        counter = n;            //add a function inside `Test` so that it can
    }                           //access the variable

    return {
        counter: counter,
        init: init,
        changeNum: changeNum
    }
};

console.log("====  Test 2_1 ===="); 
var test2_1 = new Test2(); 
console.log(test2_1.counter); 
test2_1.init(); 
test2_1.changeNum(5); 
console.log(test2_1.counter); 
test2_1.init(); 


