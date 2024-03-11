export default function getStudentsByLocation(students, city) {
  return students.filter((index) => index.location === city);
}
