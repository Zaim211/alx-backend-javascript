const http = require('http');
const { readFile } = require('fs');

function countStudents(filepath) {
  const fields = {};
  return new Promise((resolve, reject) => {
    readFile(filepath, ((error, dataStudents) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const eachline = dataStudents.toString().split('\n');
        const items = eachline.map(l => l.split(','));
	let output = '';

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
	output += `Number of students: ${items.length}\n`;
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${items[key].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    }));
  })
};

const app = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('Hello Holberton School!');
    res.end();
  }
  if (url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((output) => {
      const outString = output.slice(0, -1);
      res.end(outString);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  };
});


app.listen(1245);

module.exports = app;
