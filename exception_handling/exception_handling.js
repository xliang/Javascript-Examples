function getPersons(ids) {
	 var result = [];
	 ids. forEach(function (id) {
		 try {
			 var person = getPerson(id);
			 result. push(person);
		 } catch (exception) {
		 	console. log(exception);
		 }	
	 });
	 
	 return result;
}
