/* eslint-disable require-jsdoc */
export default class NumericRange {
  /**
   * The minimum value in the range. Default Number.NEGATIVE_INFINITY.
   * @type {number}
   */
  #min;

  /**
   * The maximum value in the range. Default Number.POSITIVE_INFINITY.
   * @type {number}
   */
  #max;

  /**
   * Creates a NumericRanges instance.
   * @param {number|null} [min] The minimum value in the range.
   * Default Number.NEGATIVE_INFINITY.
   * @param {number|null} [max] The maximum value in the range.
   * Default Number.POSITIVE_INFINITY.
   */
  constructor(min = null, max = null) {
    min = min || Number.NEGATIVE_INFINITY;
    max = max || Number.POSITIVE_INFINITY;

    if (min > max) {
      [min, max] = [max, min];
    }

    [this.#min, this.#max] = [min, max];
  }

  /**
   * Retrieve the minimum value in the range.
   * @return {number}
   */
  get min() {
    return this.#min;
  }

  /**
   * Retrieve the maximum value in the range.
   * @return {number}
   */
  get max() {
    return this.#max;
  }
}
