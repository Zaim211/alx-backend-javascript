export default function createIteratorObject(report) {
  const Names = [];
  for (const item of Object.keys(report.allEmployees)) {
    for (const name of report.allEmployees[item]) {
      Names.push(name);
    }
  }
  return Names;
}
