/**
 * Created by Owner on 7/29/2014.
 */

function Log() {
    console.log("Log created.");
    this.log = function(msg) {
        console.log(msg);
    };
}

function Instructors(log) {
    var _this = this,
        instructors = [
            { id: 1, name: "Jeremy Likness" },
            { id: 2, name: "Jeffrey Richter" },
            { id: 3, name: "Jeff Prosise" }
        ];
    this.log = log;
    log.log("Instructors created.");
    this.getInstructors = function() {
        return instructors.slice(0);
    };
    this.getInstructor = function(id) {
        var list = _this.getInstructors(),
            idx;
        for (idx = 0; idx < list.length; idx += 1) {
            if (list[idx].id === id) {
                return list[idx];
            }
        }
        return null;
    };
}

function Courses(log) {
    var _this = this,
        courses = [
            { id: 1, description: "Threading" },
            { id: 2, description: "Windows 8" },
            { id: 3, description: "Angular" }
        ];
    this.log = log;
    log.log("Courses created.");
    this.getCourses = function() {
        return courses.slice(0);
    };
    this.getCourse = function(id) {
        var list = _this.getCourses(),
            idx;
        for (idx = 0; idx < list.length; idx += 1) {
            if (list[idx].id === id) {
                return list[idx];
            }
        }
        return null;
    };
}

function CourseMap(log, instructors, courses) {
    var _this = this,
        courseMap = [
            { instructorId: 1, courseId: 3 },
            { instructorId: 2, courseId: 1 },
            { instructorId: 3, courseId: 2 }
        ];
    this.log = log;
    this.instructors = instructors;
    this.courses = courses;
    log.log("CourseMap created.");
    this.getCourseMap = function() {
        var result = [],
            idx;
        for(idx = 0; idx < courseMap.length; idx += 1) {
            result.push({
                instructor: _this.instructors.getInstructor(courseMap[idx].instructorId),
                course: _this.courses.getCourse(courseMap[idx].courseId)
            });
        }
        return result;
    };
}


var log = new Log();
log.log("We're in business.");
var instructors = new Instructors(log);
log.log(instructors.getInstructors());
log.log(instructors.getInstructor(1));
var courses = new Courses(log);
log.log(courses.getCourses());
log.log(courses.getCourse(1));
var courseMap = new CourseMap(log, instructors, courses);
log.log(courseMap.getCourseMap());