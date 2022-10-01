/**
 * Get the values of the given array by the odd indexes or the given array of objects using the given key
 */
export default function oddIndexes(array: any[]): any[] {
  if (!Array.isArray(array)) return [];

  return array.filter((_item, index) => index % 2 !== 0);
}
