const { readFile } = require('fs');

function countStudents(filepath) {
  const fields = {};
  return new Promise((resolve, reject) => {
    readFile(filepath, 'utf-8', ((error, dataStudents) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const eachline = dataStudents.split('\n').filter((l) => l !== '').slice(1);
        const items = eachline.map(l => l.split(','));

        console.log(`Number of students: ${items.length}`);
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

        for (const field in fields) {
          if (Object.hasOwnProperty.call(fields, field)) {
            const names = fields[field].join(', ');
            const count = fields[field].length;
            console.log(`Number of students in ${field}: ${count}. List: ${names}`);
          }
        }

        resolve();
      }
    }));
  })
};

module.exports = countStudents;
