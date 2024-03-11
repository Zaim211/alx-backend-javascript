export default function groceriesList() {
  const items = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  const result = new Map();
  for (const index of items) {
    result.set(index[0], index[1]);
  }
  return result;
}
