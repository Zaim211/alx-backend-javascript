export default function updateStudentGradeByCity(students, city, newGrade) {
  return students
    .filter((index) => index.location === city)
    .map((value) => {
      const allgrades = newGrade.filter((index) => index.studentId === value.id);
      const grade = allgrades.length ? allgrades[0].grade : 'N/A';
      return {
        ...value,
        grade,
      };
    });
}
