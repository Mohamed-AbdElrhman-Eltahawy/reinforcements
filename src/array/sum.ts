import get from "./../object/get";

/**
 * Sum the total value of the array
 *
 * The key supports dot notation. syntax: "key1.key2.key3"
 */
export default function sum(array: any[], key?: string): number {
  if (!Array.isArray(array)) return 0;

  if (key) {
    return array.reduce((total, item) => {
      const value = get(item, key, 0);

      if (typeof value !== "number" || isNaN(value)) {
        return total;
      }

      return total + value;
    }, 0);
  }

  // if there is no key passed, then we'll sum array of numbers

  // using reduce
  return array.reduce((total, value) => {
    if (typeof value !== "number" || isNaN(value)) {
      return total;
    }

    return total + value;
  }, 0);
}
