/**
 * Class that enables iterative deep copy of objects while handling
 * circular references using a WeakMap to track visited objects.
 */
export default class IterativeCloner {
  /**
   * Deep copy properties from the source object to the target object.
   * @param {Object} target The object to copy properties into.
   * @param {Object} source The object to copy properties from.
   * @return {Object} The target object with copied properties.
   */
  static assign(target, source) {
    const stack = [{ target, source }];
    const seen = new WeakMap();

    while (stack.length) {
      const { target, source } = stack.pop();

      if (seen.has(source)) continue;

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

        target[key] = Array.isArray(value) ? [] : {};
        stack.push({ target: target[key], source: value });
      }
    }

    return target;
  }
}
