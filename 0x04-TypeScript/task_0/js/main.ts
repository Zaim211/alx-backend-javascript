interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const [student1, student2] = [
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
]

const studentsList: Array<Student> = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTbaleElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.create("thead");
const tbody: HTMLTableSectionElement = document.create("tbody");
const rowHead: HTMLTableRowElement = thead.insertRow(0);
const firstCellHead: HTMLTableCellElment = rowHead.insertCell(0);
const secondCellHead: HTMLTableCellElment = rowHead.insertCell(1);

firstCellHead.innerHTML = "firstName";
secondCellHead.innerHTML = "location";
table.append(head);

studentsList.forEach(student => {
  const row = HTMLTbaleRowElement = tbody.insertRow(0);
  const firstCell : HTMLTableCellElement = row.insertCell(0);
  const secondCell : HTMLTableCellElement = row.insertCell(1);
  firstCell.innerHTML = student.firstName;
  secondCell.innerHTML = student.location;
});

table.append(tbody);
body.append(table);
