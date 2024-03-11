export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer, 0, length);
  const index = new Int8Array(buffer);
  index[position] = value;
  if (position >= length) throw Error('Position outside range');
  return view;
}
