const { readFileSync } = require('fs');

function countStudents(filepath) {
  // initialsation of items in databases
  const personnes = {};
  const fields = {};
  let length = 0;
  try {
    const dataStudents = readFileSync(filepath, 'utf-8');
    const eachline = dataStudents.split('\n');
    for (let item = 0; item < eachline.length; item += 1) {
      if (eachline[item]) {
	length += 1;
        const field = eachline[item].split(',');
        if (Object.prototype.hasOwnProperty.call(personnes, field[3])) {
          personnes[field[3]].push(field[0]);
        } else {
          personnes[field[3]] = [field[0]];
        }
        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
          fields[field[3]] += 1;
        } else {
          fields[field[3]] = 1;
        }
      }
    }
    const count = length - 1;
    console.log(`Number of students: ${count}`);
    for (const [k, v] of Object.entries(fields)) {
      if (k !== 'field') {
        console.log(`Number of students in ${k}: ${v}. List: ${personnes[k].join(', ')}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
};

module.exports = countStudents;
