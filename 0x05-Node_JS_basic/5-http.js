const http = require('http');
const { readFile } = require('fs');

function countStudents(filepath) {
  return new Promise((resolve, reject) => {
    readFile(filepath, 'utf-8', ((error, dataStudents) => {
      if (error) {
        const err = new Error('Cannot load the database');
	reject(err);
      } else {
	let outp = '';
        const eachline = dataStudents.split('\n').filter((l) => l !== '').slice(1);
        const items = eachline.map(l => l.split(','));

        outp += `Number of students: ${items.length}`;

	const fields = {};
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
            outp += `\nNumber of students in ${field}: ${count}. List: ${names}`;
          }
        }

        resolve(outp);
      }
    }));
  })
};


const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.write('');
    countStudents(process.argv[2])
      .then((data) => res.end(`This is the list of our students\n${data}`))
      .catch((error) => res.end(`This is the list of our students\n${error.message}`));
  }
}).listen(1245);

module.exports = app;
