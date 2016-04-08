function closure () {
	var date = new Date(); 

	return function (){
		return console.log(date.getMilliseconds()); 
	}
}

var v1 = closure(); 

/*
	The result is same, becasue the variable date is captured (encapsulated)
*/

v1(); 
v1();
v1();
