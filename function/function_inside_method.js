var jane = {
	 name: 'Jane' ,
	 
	 friends: [ 'Tarzan' , 'Cheeta' ],
	 
	 logHiToFriends: function () {
		 'use strict' ;
		 
		 this. friends. forEach(function (friend) {
		 // `this` is undefined here
		 console. log(this. name+' says hi to ' +friend);
		});
	}
}

// two ways to fix that

var jane2 = {
	 name: 'Jane' ,
	 
	 friends: [ 'Tarzan' , 'Cheeta' ],
	 
	 logHiToFriends: function () {
		 'use strict' ;
		 var that = this;
		 this. friends. forEach(function (friend) {
		 console. log(that. name+' says hi to ' +friend);
		});
	}
}

jane2.logHiToFriends(); 


var jane3 = {
	 name: 'Jane' ,
	 
	 friends: [ 'Tarzan' , 'Cheeta' ],
	 
	 logHiToFriends: function () {
	 'use strict' ;
	 this. friends. forEach(function (friend) {
	 console. log(this. name+' says hi to ' +friend);
	 }, this);
	}
}

jane3.logHiToFriends(); 