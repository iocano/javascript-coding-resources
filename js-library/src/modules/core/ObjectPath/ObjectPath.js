import PathKey from './models/PathKey.js';

/**
 * Class that contains the logic to set and get object properties values
 * based on a path.
 */
export default class ObjectPath {
  /**
   * Sets the value at the specified path in the target object.
   * @param {object} target The target object.
   * @param {string} path The path to the property where the value will be set.
   * @param {*} value The value to set.
   * @return {object} The modified target object.
   */
  static setValue(target, path, value) {
    const traversed = ObjectPath.#traverse(target, path);
    ObjectPath.#setProperty(traversed.target, traversed.key, value);
    return target;
  }

  /**
   * Retrieves a value from the target object based on the given path.
   * @param {object} target The target object to retrieve the value from.
   * @param {string} path The path to the desired value.
   * @return {*} The value at the end of the path, or undefined if not found.
   */
  static getValue(target, path) {
    const result = ObjectPath.#traverse(target, path);
    return result.target[result.key];
  }

  /**
   * Traverses the target object based on the given path, creating and
   * initializing properties as necessary.
   * @param {object} target The target object to traverse.
   * @param {string[]} path The path to traverse.
   * @return {{ target: object, key: string }} The traversed target object and
   * the final key accessed.
   */
  static #traverse(target, path) {
    const keys = ObjectPath.#parseObjectPath(path);
    let key = keys.shift();
    while (keys.length) {
      const nextKey = keys[0];
      target = this.#traverseToProperty(target, key, nextKey);
      key = keys.shift();
    }
    return { target, key: key.name };
  }

  /**
   * Point the target object to target[key], if does not exist, initializes as
   * array or as object based on the next path key name.
   * @param {*} target The target object.
   * @param {PathKey} key  The current property key.
   * @param {PathKey} nextKey The next property key.
   * @return {*} The target object at specified property.
   */
  static #traverseToProperty(target, key, nextKey) {
    if (!target[key.name]) {
      ObjectPath.#setProperty(target, key.name, isNaN(nextKey.name) ? {} : []);
    }
    return target[key.name];
  }

  /**
   * Sets a value to a property of the target object.
   * @param {object} target The target object.
   * @param {string} key The key or index of the property, if the key is empty
   * string the target is considered as an array and the value is pushed.
   * @param {*} value The value to set.
   * @return {string|number} The key or index of the property where the value
   * was set.
   */
  static #setProperty(target, key, value) {
    if (key === '') {
      target.push(value);
      return target.length - 1;
    }

    target[key] = value;
    return key;
  }

  /**
   * Parses the given object path and returns an array of keys.
   * @param {string[]} path The object path to parse.
   * @return {PathKey[]} - An array of parsed keys.
   */
  static #parseObjectPath(path) {
    const regex = /(\w+)|\[(['"]?)\s*(.*?)\s*(['"]?)\]/g;
    const keys = [];
    for (const match of path.matchAll(regex)) {
      // [matchedText, property, opening, index, closing] = match
      keys.push(new PathKey(match));
    }
    return keys;
  }
}
