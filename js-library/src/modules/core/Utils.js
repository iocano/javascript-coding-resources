/** Utility helper class. */
export default class Utils {
  /**
   * Creates a class instance based on the class name and parameters.
   * @param {string} className The name of the class to instantiate.
   * @param {Array} parameters Class constructor parameters. Default: [].
   * @param {object} [namespace] Class namespace. Default: globalThis.
   * @return {object} The class instance.
   * @throws {Error} If the specified class cannot be found in the namespace.
   */
  static createInstance(className, parameters = [], namespace = globalThis) {
    if (!(className in namespace)) {
      throw new Error(`Class '${className}' not found in namespace.`);
    }

    const Class = namespace[className];
    return new Class(...parameters);
  }

  /**
   * Check if the provided string is valid JavaScript identifier.
   * @param {string} id The string to validate as JS identifier.
   * @return {boolean} Returns true if there is valid identifier.
   */
  static isValidJSId(id) {
    const validIdRegex = /^[a-z_$][a-zZ0-9_$]*$|^-?[0-9]+$/i;
    return validIdRegex.test(id);
  }
}
