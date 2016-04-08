var proto = {
	sentence : 4,
	probation : 2
}; 

var first = Object.create(proto); 
first.name = 'Joe';
first.id = '12A'; 

var second = Object.create(proto); 
second.name = 'Sam';
second.id = '2BC';