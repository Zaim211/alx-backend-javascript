export default function iterateThroughObject(reportWithIterator) {
  let name = '';

  for (const nameEmployee of reportWithIterator) {
    name += nameEmployee;
  }

  return name.join(' | ');
}
