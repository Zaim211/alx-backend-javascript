const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2]).then((output) => {
      const outp = [];
      outp.push('This is the list of our students');
      const key = Object.keys(output);
      key.sort();
      for (let k = 0; k < key.length; k += 1) {
        outp.push(`\nNumber of students in ${key[k]}: ${output[key[k]].length}. List: ${output[key[k]].join(' ,')}`);
      }
      response.status(200).send(outp.join('\n'));
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const field = request.params.major;
    readDatabase(process.argv[2]).then((output) => {
      if (field in output) {
        response.status(200).send(`List: ${output[field].join(', ')}`);
      } else {
	response.status(500).send('Major parameter must be CS or SWE');
      }
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}

module.exports = StudentsController;
