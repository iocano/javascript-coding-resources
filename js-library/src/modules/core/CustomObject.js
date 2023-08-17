/* eslint-disable require-jsdoc */

export default class CustomObject {
  /**
   * Counts the number of enumerable elements in an object.
   * @param {object} target The target object to count the elements of.
   * @return {number} The number of elements in the object.
   */
  static countElements(target) {
    return Object.keys(target).length;
  }
}
