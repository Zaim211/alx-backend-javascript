const { readFile } = require('fs');

function readDatabase(pathfile) {
  return new Promise((resolve, reject) => {
    readFile(pathfile, 'utf-8', (err, data) => {
      if (err) {
	reject(err);
      } else {
	const eachline = data.split('\n').filter((l) => l !== '').slice(1);
        const items = eachline.map(l => l.split(','));
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
        resolve(fields);
      }
    });
  });
}

export default readDatabase;
