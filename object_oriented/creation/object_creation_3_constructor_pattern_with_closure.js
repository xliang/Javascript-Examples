// Constructor without this 

function Person (firstName, lastName) {
	var _firstName = firstName,
	    _lastName = lastName; 
	
	var my = {
		firstName : _firstName,
		lastName : _lastName
	};

	my.fullName = function() {
		return _firstName + ' ' + _lastName
	} 

	// Getter/Setter

	my.firstName = function (value) {
		if (!arguments.length) return _firstName; 
		_firstName = value;

		return my; 
	}
	my.lastName = function (value){
		if (!arguments.length) return _lastName; 
		_lastName = value; 

		return my; 
	}

	return my; 
}

var mark = Person('Mark', 'Twain'); // note: no `new` keyword!

mark.firstName('Samuel');
mark.lastName('Clemens');

mark.fullName(); // Samuel Clemens

/*
    Prototypes let you share public methods across objects. (They also let you use inheritance).

    Closures let you have private properties and methods. They are often used in libraries. (Closures are part of a larger pattern called the Module pattern).

    Custom constructors can be useful when building specialized APIs.
    
	    Person = Ember.Object.extend({
		  fullName: function() {
		    return this.get('firstName') + ' ' + this.get('lastName');
		  }
		});

		var tim = Person.create({
		  firstName: "Tim",
		  lastName: "Tebow"
		});

		tim.fullName();

    Object literals are often used to store and pass around isolated chunks of data, like configuration settings or the parameters to an AJAX request. They can also help reduce the number of globals in your code.


*/