var myFeature = {
	myProperty: "hello",
	myMethod: function () {
		console.log(myFeature.myProperty); 
	},

	init: function (settings) {
		myFeature.settings = settings; 
	},

	readSettings : function() {
		console.log(myFeature.settings); 
	}
}; 

myFeature.myProperty === "hello"; 
myFeature.myMethod(); 
myFeature.init({
	foo: "bar"
}); 
myFeature.readSettings(); 