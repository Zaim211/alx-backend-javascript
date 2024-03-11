export default function getStudentsByLocation(student = getListStudents(), city) {
  return student.filter((index) => index.location === city);
}
