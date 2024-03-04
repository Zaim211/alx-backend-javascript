export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const index of array) {
    arr.push(appendString + index);
  }

  return arr;
}
