function buildList(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        var item = 'item' + i;
        result.push( function() {console.log(item + ' ' + list[i])} );
    }
    return result;
}

function testList() {
    var fnlist = buildList([1,2,3]);
    // Using j only to help prevent confusion -- could use i.
    for (var j = 0; j < fnlist.length; j++) {
        fnlist[j]();
    }
}

testList();

function buildList_1 (list) {
	var result = []; 
	for (var i = 0; i < list.length; i++) {

		(function (i) {
			 var item = 'item' + i;
			  result.push( function() {console.log(item + ' ' + list[i])} );
		})(i); 
	}

	return result; 
}

function testList_1() {
    var fnlist = buildList_1([1,2,3]);
    // Using j only to help prevent confusion -- could use i.
    for (var j = 0; j < fnlist.length; j++) {
        fnlist[j]();
    }
}

// run the 
testList_1();
