/**
 * Created by Owner on 8/31/2014.
 */

// Json data is stored as key/value pair
var hello_world = {"Hello": "World"};
console.log(hello_world.Hello);

var hello_world_2 = {"Hello-World": "Works"};

// It does not work
// console.log(hello_world_2.hello-world);
console.log(hello_world_2["Hello-World"]);

// JSON support 6 data types:
// integer, string, date time, boolean, null, array

// Complex JSON
var complexJson = {
   "id": 101,
    "name": "John Doe",
    "isStudent": true,
    "Scores": [10, 20, 30, 40, 50],
    "Courses": {
        "major": "Finance",
        "minor": "Marketing"
    }
};

// access array
console.log(complexJson.Scores[2]);

// access element in an object
console.log(complexJson.Courses.major);
