var getClass = function(val) {
	return Object.prototype.toString.call(val)
		.match(/^\[object\s(.*)\]$/)[1];
};

//Defines the type of the value, extended typeof
var whatis = function(val) {

	if (val === undefined)
		return 'undefined';
	if (val === null)
		return 'null';

	var type = typeof val;

	if (type === 'object')
		type = getClass(val).toLowerCase();

	if (type === 'number') {
		if (val.toString().indexOf('.') > 0)
			return 'float';
		else
			return 'integer';
	}

	return type;
};

var compareObjects = function(a, b) {
	if (a === b)
		return true;
	for (var i in a) {
		if (b.hasOwnProperty(i)) {
			if (!equal(a[i],b[i])) return false;
		} else {
			return false;
		}
	}

	for (var i in b) {
		if (!a.hasOwnProperty(i)) {
			return false;
		}
	}
	return true;
};

var compareArrays = function(a, b) {
	if (a === b)
		return true;
	if (a.length !== b.length)
		return false;
	for (var i = 0; i < a.length; i++){
		if(!equal(a[i], b[i])) return false;
	};
	return true;
};

var _equal = {};
_equal.array = compareArrays;
_equal.object = compareObjects;
_equal.date = function(a, b) {
	return a.getTime() === b.getTime();
};
_equal.regexp = function(a, b) {
	return a.toString() === b.toString();
};
//	uncoment to support function as string compare
//	_equal.fucntion =  _equal.regexp;



/*
 * Are two values equal, deep compare for objects and arrays.
 * @param a {any}
 * @param b {any}
 * @return {boolean} Are equal?
 */
var equal = function(a, b) {
	if (a !== b) {
		var atype = whatis(a), btype = whatis(b);

		if (atype === btype)
			return _equal.hasOwnProperty(atype) ? _equal[atype](a, b) : a==b;

		return false;
	}

	return true;
};


 var Json_1 = { "name" : "tutorialspoint.com", "year"  : 2005 };
 var Json_2 = { "name" : "tutorialspoint.com", "year"  : 2005 };
 var Json_3 = Json_1; 

 console.log(Json_1 === Json_2); 
 console.log(Json_3 === Json_1); 

console.log(compareObjects(Json_1, Json_2)); 
