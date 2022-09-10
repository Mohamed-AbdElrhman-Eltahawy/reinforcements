/**
 * Pluck the given array by the given key
 * If the second argument is sent as object , it will return an array of objects
 * otherwise, it will return an array of values
 *
 * The key supports dot notation. syntax: "key1.key2.key3"
 */
export default function pluck<T = unknown>(
  array: T[],
  key?: string | string[],
): any[] {}
