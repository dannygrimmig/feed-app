export function removeDuplicates(array) {
  const toReturn = [];
  for (const item of array) {
    if (!toReturn.includes(item)) {
      toReturn.push(item);
    }
  }
  return toReturn;
}
