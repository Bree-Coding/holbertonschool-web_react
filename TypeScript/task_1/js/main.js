var teacher3 = {
    firstName: "April",
    lastName: "Mendez",
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
};
console.log(teacher3);
var director1 = {
    firstName: "Paige",
    lastName: "Saraya",
    fullTimeEmployee: true,
    location: 'Lisbone',
    numberOfReports: 3,
};
console.log(director1);
function printTeacher(firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
}
console.log(printTeacher(teacher3.firstName, teacher3.lastName));
var StudentClass = /** @class */ (function () {
    function StudentClass(_a) {
        var firstName = _a.firstName, lastName = _a.lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var Student = StudentClass;
