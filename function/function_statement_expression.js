try {
	sayHello(); //Error because not defined
} catch (e) {
	//Property ‘sayHello’ of object [object DOMWindow] //is not a function
	console.log(e.message);
}

sayGoodbye(); //Goodbye

//Function Expression
var sayHello = function() {
	console.log("Hello");
};

sayHello(); //Hello

sayGoodbye(); //Goodbye

//Function Statement
function sayGoodbye() {
	console.log("Goodbye");
}

sayHello(); //Hello

sayGoodbye(); //Goodbye