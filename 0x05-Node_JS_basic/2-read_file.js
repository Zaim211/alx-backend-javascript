#!/usr/bin/node
const fs = require('fs');

function countStudents(filepath) {
  try {
    const data = fs.readFileSync(filepath, 'utf-8');
    const lines = data.split('\n').filter((line) => line !== '').slice(1);
    const items = lines.map(line => line.split(','));

    console.log(`Number of students: ${items.length}`);

    const fields = {};
    items.forEach((item) => {
      const firstName = item[0];
      const field = item[3];

      if (!fields[field]) {
        fields[field] = [firstName];
      } else {
        fields[field].push(firstName);
      }
    });

    for (const field in fields) {
      if (Object.hasOwnProperty.call(fields, field)) {
        const names = fields[field].join(', ');
        const count = fields[field].length;
        console.log(`Number of students in ${field}: ${count}. List: ${names}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
