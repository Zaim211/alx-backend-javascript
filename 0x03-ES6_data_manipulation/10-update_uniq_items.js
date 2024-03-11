export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw Error('Cannot process');

  map.forEach((value, index) => {
    if (value === 1) map.set(index, 100);
  });
}
