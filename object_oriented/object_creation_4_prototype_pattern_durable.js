function Person(name, age, job){
		 //create the object to return
		 var o = new Object();

	 	//optional: define private variables/functions here
	 
	 	//attach methods
	 	 o.sayName = function(){
	 	 alert(name);
	 };
	 //return the object
	 return o;
}


var friend = Person(“Nicholas”, 29, “Software Engineer”);
friend.sayName(); //”Nicholas”

/*

The person variable is a durable object, and there is no way to access any of its data members
without calling a method. Even if some other code adds methods or data members to the object, there
is no way to access the original data that was passed into the constructor. 


*/