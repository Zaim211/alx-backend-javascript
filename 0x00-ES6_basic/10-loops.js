export default function appendToEachArrayValue(array, appendString) {
  const value = array[idx];
  for (let idx in array) {
    array[idx] = appendString + value;
  }

  return array;
}
