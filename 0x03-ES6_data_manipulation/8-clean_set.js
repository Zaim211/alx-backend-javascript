export default function cleanSet(set, startString) {
  let result = '';
  if (!startString.length || !startString) return result;
  for (const element of set) {
    if (element && element.startsWith(startString)) {
      result += `${element.slice(startString.length)}-`;
    }
  }
  return result.slice(0, result.length - 1);
}
