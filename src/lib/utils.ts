/**
 * Asserts that the value x can never be constructed. Particularly useful for
 * exhaustiveness checking in `switch` statements.
 *
 * See https://www.typescriptlang.org/docs/handbook/advanced-types.html#exhaustiveness-checking
 *
 * @param x a value that can never exist
 */
export function assertNever(x: never): never {
  throw new Error(`Unexpected value: ${x}`);
}

export function sum(...xs: ReadonlyArray<number>): number {
  return xs.reduce((acc, val) => acc + val, 0);
}

export function product(...xs: ReadonlyArray<number>): number {
  return xs.reduce((acc, val) => acc * val, 1);
}
