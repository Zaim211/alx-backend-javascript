import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2]).then((fields) => {
      let outp = 'This is the list of our students';

      const field = Object.keys(fields).sort();
      field.forEach((i) => {
        const count = fields[i].length;
        const names = fields[i].join(', ');

        outp += `\nNumber of students in ${i}: ${count}. List: ${names}`;
      });
      response.status(200).send(outp);
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const req = request.params.major;
    readDatabase(process.argv[2]).then((fields) => {
      if (!(req in fields)) {
        response.status(500).send('Major parameter must be CS or SWE');
      } else {
        response.status(200).send(`List: ${fields[req].join(', ')}`);
      }
      // response.send(`List: ${fields[major].join(', ')}`);
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}

export default StudentsController;
