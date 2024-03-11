export default function hasValuesFromArray(set, array) {
  for (let index of array) {
    if (!set.has(index)) return false;
  }
  return true;
}
