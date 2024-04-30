import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2]).then((fields) => {
      const outp = [];
      outp.push('This is the list of our students');
      const key = Object.keys(fields);
      key.sort();
      for (let k = 0; k < key.length; k += 1) {
        outp.push(`\nNumber of students in ${key[k]}: ${fields[key[k]].length}. List: ${fields[key[k]].join(' ,')}`);
      }
      response.status(200).send(outp.join('\n'));
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const field = request.params.major;
    readDatabase(process.argv[2]).then((fields) => {
      if (field in fields) {
        response.status(200).send(`List: ${fields[field].join(', ')}`);
      } else {
	response.status(500).send('Major parameter must be CS or SWE');
      }
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}

export default StudentsController;
