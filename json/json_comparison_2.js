var compareJSON = function(obj1, obj2) { 
  var ret = {}; 
  for(var i in obj2) { 
    if(!obj1.hasOwnProperty(i) || obj2[i] !== obj1[i]) { 
      ret[i] = obj2[i]; 
    } 
  } 
  return ret; 
}; 

var a = { 
"Field A":"1", 
"Field B":"2", 
"Field D":"Something", 
"Field E":"6" 
};

var b = { 
"Field A":"1", 
"Field B":"2", 
"Field C":"3", 
"Field D":"Different" 
};

console.log(JSON.stringify(compareJSON(a, b))); 