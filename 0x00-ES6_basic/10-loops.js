export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (let index of array) {
    arr.push(appendString + index);
  }

  return arr;
}
