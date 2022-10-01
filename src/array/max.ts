import get from "../object/get";

/**
 * Get the max value of the given array or the given array of objects using the given key
 *
 * The key supports dot notation. syntax: "key1.key2.key3"
 */
export default function max(array: any[], key?: string): number {
  if (!Array.isArray(array)) return 0;

  let maxValue = 0;

  for (let i = 0; i < array.length; i++) {
    const value = key ? Number(get(array[i], key)) : Number(array[i]);

    if (isNaN(value)) continue;

    if (maxValue === 0 || value > maxValue) {
      maxValue = value;
    }
  }

  return maxValue;
}
