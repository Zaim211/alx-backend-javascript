export default function getListStudentIds(key) {
  if (!Array.isArray(key)) return [];
  return key.map((index) => index.id);
}
