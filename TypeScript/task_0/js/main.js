/*eslint-disable*/
;
var student1 = {
    firstName: "Michelle",
    lastName: "McCool",
    age: 21,
    location: "Los Angeles",
};
var student2 = {
    firstName: "Layla",
    lastName: "Just",
    age: 23,
    location: "New Jersey"
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var headerRow = table.insertRow();
var headers = ['First Name', 'Location'];
headers.forEach(function (header) {
    var th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
});
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var firstNameCell = row.insertCell();
    firstNameCell.textContent = student.firstName;
    var locationCell = row.insertCell();
    locationCell.textContent = student.location;
});
document.body.appendChild(table);
