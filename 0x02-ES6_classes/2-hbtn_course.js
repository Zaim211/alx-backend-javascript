export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    } else {
      this._name = name;
    }

    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    } else {
      this._length = length;
    }

    if (!Array.isArray(students)) {
      throw TypeError('Students must be an array of strings');
    } else {
      students.forEach((name) => {
        if (typeof name !== 'string') {
          throw TypeError('Students must be an array of strings');
        }
      });

      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') { throw new TypeError('Name must be a string'); }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') { throw new TypeError('Length must be a number'); }
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value)) {
      throw TypeError('Students must be an array of strings');
    } else {
      value.forEach((name) => {
        if (typeof name !== 'string') {
          throw TypeError('Students must be an array of strings');
        }
      });

      this._students = value;
    }
  }
}
