import pluck from "./pluck";

/**
 * Get median value of the array
 *
 * The key supports dot notation. syntax: "key1.key2.key3"
 */
export default function median(array: any[], key?: string): number {
  if (!Array.isArray(array)) return 0;

  if (key) {
    array = pluck(array, key);

    if (!Array.isArray(array)) return 0;
  }

  // if array is not list of numbers then return 0

  if (!array.every(item => typeof item === "number")) return 0;

  const length = array.length;

  if (length === 0) return 0;

  array.sort((a, b) => a - b);

  const middle = Math.floor(length / 2);

  const value =
    length % 2 ? array[middle] : (array[middle - 1] + array[middle]) / 2;

  if (isNaN(value) || typeof value !== "number") return 0;

  return value;
}
