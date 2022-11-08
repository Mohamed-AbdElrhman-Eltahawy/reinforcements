import capitalize from "./capitalize";

/**
 * Convert current string to camel case
 * i.e hello-world will become: helloWorld
 *
 * @param string separator default is by dash(-) or underscore(_)
 * @return string
 * @see String.capitalize
 */
export default function toStudlyCase(
  string: string,
  separator = "-|\\.|_|/|\\s",
): string {
  if (!string) return "";

  const regex = new RegExp(separator, "g");
  return string
    .split(regex)
    .map(word => capitalize(word))
    .join("");
}
