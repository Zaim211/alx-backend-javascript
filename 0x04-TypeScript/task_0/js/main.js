var _a = [
    {
        firstName: 'youssef',
        lastName: 'zaim',
        age: 27,
        location: 'Marrakech'
    },
    {
        firstName: 'josef',
        lastName: 'tita',
        age: 27,
        location: 'Marrakech'
    }
], student1 = _a[0], student2 = _a[1];
var studentsList = [student1, student2];
var body = document.getElementsByTagName("body")[0];
var table = document.createElement("table");
var thead = document.create("thead");
var tbody = document.create("tbody");
var rowHead = thead.insertRow(0);
var firstCellHead = rowHead.insertCell(0);
var secondCellHead = rowHead.insertCell(1);
firstCellHead.innerHTML = "firstName";
secondCellHead.innerHTML = "location";
table.append(head);
studentsList.forEach(function (student) {
    var row = HTMLTbaleRowElement = tbody.insertRow(0);
    var firstCell = row.insertCell(0);
    var secondCell = row.insertCell(1);
    firstCell.innerHTML = student.firstName;
    secondCell.innerHTML = student.location;
});
table.append(tbody);
body.append(table);
