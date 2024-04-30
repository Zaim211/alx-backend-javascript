const { readFile } = require('fs');

function readDatabase(pathfile) {
  return new Promise((reject, resolve) => {
    readFile(pathfile, 'utf-8', (err, data) => {
      if (err) {
	reject(err);
      } else {
	const eachline = data.split('\n').filter((l) => l !== '').slice(1);
        const items = eachline.map(l => l.split(','));
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
        resolve(fields);
      }
    });
  });
}

module.exports = readDatabase;
