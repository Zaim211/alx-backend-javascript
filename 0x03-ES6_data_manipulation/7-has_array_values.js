export default function hasValuesFromArray(set, array) {
  for (const index of array) {
    if (!set.has(index)) return false;
  }
  return true;
}
