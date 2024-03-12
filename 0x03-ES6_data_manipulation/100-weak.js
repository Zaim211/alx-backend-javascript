export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let result = weakMap.get(endpoint) || 0;

  result++;

  weakMap.set(endpoint, result);
  if (result >= 5) throw new Error('Endpoint load is high');
}
