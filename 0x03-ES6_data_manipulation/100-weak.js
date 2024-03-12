export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const result = weakMap.get(endpoint);
  if (result >= 5) {
    throw new Error('Endpoint load is high');
  }

  if (weakMap.has(endpoint)) {
    weakMap.set(endpoint, result + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
}
