/**
 * Class that enables recursive deep copy of objects while handling
 * circular references using a WeakMap to track visited objects.
 */
export default class RecursiveCloner {
  /**
   * Deep copy properties from the source object to the target object.
   * @param {Object} target The object to copy properties into.
   * @param {Object} source The object to copy properties from.
   * @return {Object} The target object with copied properties.
   */
  static assign(target, source) {
    target = target || {};
    RecursiveCloner.#assignHelper(target, source);
    return target;
  }

  /**
   * Helper method for recursively performing deep copy of properties.
   * @param {Object} target The object to copy properties into.
   * @param {Object} source The object to copy properties from.
   * @param {WeakMap} seen A WeakMap to keep track of visited objects to handle
   * circular references.
   * @private
   */
  static #assignHelper(target, source, seen = new WeakMap()) {
    if (seen.has(source)) {
      target = seen.get(source);
      return;
    }
    seen.set(source, target);

    for (const [key, value] of Object.entries(source)) {
      if (typeof value !== 'object' || value === null) {
        target[key] = value;
        continue;
      }

      if (seen.has(value)) {
        target[key] = seen.get(value);
        continue;
      }

      // const child = target[key] || (Array.isArray(value) ? [] : {});
      // target[key] = RecursiveCloner.#assignHelper(child, value, seen);
      target[key] = target[key] || Array.isArray(value) ? [] : {};
      RecursiveCloner.#assignHelper(target[key], value, seen);
    }
  }
}
