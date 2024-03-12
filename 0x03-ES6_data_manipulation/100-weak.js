export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const result = weakMap.get(endpoint);
    if (result >= 4) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, result + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
}
