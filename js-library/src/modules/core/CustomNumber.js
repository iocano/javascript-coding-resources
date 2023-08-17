
/** Class to extend Number functionality. */
export default class CustomNumber {
  /**
   * Checks if number is an integer.
   * @param {string|number} num The number to check.
   * @return {boolean}
   */
  static isInteger(num) {
    return CustomNumber.isValidNumber(num) && (num % 1 === 0);
  }

  /**
   * Checks if number is fractional.
   * @param {string|number} num The number to check.
   * @return {boolean}
   */
  static isFractional(num) {
    return !isNaN(num) && (num % 1 !== 0);
  }

  /**
   * Checks if number is in range.
   * @param {number} num The number to check.
   * @param {number} min The minimum value.
   * @param {number} max The maximum value.
   * @return {boolean}
   */
  static isInRange(num, min = null, max = null) {
    if (min === null) min = Number.NEGATIVE_INFINITY;
    if (max === null) max = Number.POSITIVE_INFINITY;
    num = Number(num);
    return min <= num && num <= max;
  };

  /**
   * Check if string is a valid number.
   * @param {string} num The number to check.
   * @return {boolean}
   */
  static isValidNumber(num) {
    return !isNaN(num);
  }
}
