const fs = require('fs');

function countStudents(filepath) {
  const fields = {};
  try {
    const dataStudents = fs.readFileSync(filepath, 'utf-8');
    const eachline = dataStudents.split('\n').filter((l) => l !== '').slice(1);
    const items = eachline.map(l => l.split(','));

    items.forEach((item) => {
      if (item.length === 4) {
        const [firstName, lastName, age, field] = item;
	if (fields[field]) {
          fields[field].push(firstName);
	} else {
	  fields[field] = [firstName];
	}
      }
    });

    console.log(`Number of students: ${items.length}`);

    for (const field in fields) {
      if (Object.hasOwnProperty.call(fields, field)) {
        const names = fields[field].join(', ');
        const count = fields[field].length;
        console.log(`Number of students in ${field}: ${count}. List: ${names}`);
      }
    }

  } catch (error) {
    throw Error('Cannot load the database');
  }
};

module.exports = countStudents;
