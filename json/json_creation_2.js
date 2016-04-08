// create JSON from javascript dynamically 

var sitePersonel = {};
var employees = []


sitePersonel.employees = employees;

console.log(sitePersonel);

var firstName = "John";
var lastName = "Smith";
var employee = {
    "firstName": firstName,
    "lastName": lastName 
}

sitePersonel.employees.push(employee);

console.log(sitePersonel);

var manager = "Jane Doe";
sitePersonel.employees[0].manager = manager;

console.log(sitePersonel);

console.log(JSON.stringify(sitePersonel));
