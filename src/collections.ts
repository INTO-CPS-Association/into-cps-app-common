/**
 * Determines if the object is iterable
 *
 * @param obj the object to check
 */
export function isIterable(obj: any): obj is Iterable<any> {
  // checks for null and undefined
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === "function";
}

/**
 * Returns an iterable of type T from a single element of the type or a iterable of the type.
 */
export function asArray<T>(elemOrIterable: T | Iterable<T>): Array<T> {
  const isiterable = isIterable(elemOrIterable);

  return isiterable
    ? Array.from(elemOrIterable as Iterable<T>)
    : [elemOrIterable as T];
}
