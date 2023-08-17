// eslint-disable-next-line no-unused-vars
import NumericRange from './../../core/Models/NumericRange.js';

/** Describes a style for width length range. */
export default class WidthRangeStyle {
  /**
   * Range of width length to apply style.
   * @type {NumericRange}
   */
  #widthRange;

  /**
   * Style object.
   * @type{object}
   */
  #style;

  /**
   * CSS length unit for width range.
   * @type {string}
   */
  #widthUnit;

  /**
   * Create a WidthRangeStyle instance.
   * @param {NumericRange} widthRange Numeric width range.
   * @param {Object.<string,*>} style Style object.
   * @param {string} widthUnit Width range unit. Default 'px'.
   */
  constructor(widthRange, style, widthUnit = 'px') {
    this.#widthRange = widthRange;
    this.#style = style;
    this.#widthUnit = widthUnit;
  }

  /**
   * Retrieves the width range.
   * @return {NumericRange}
   */
  get widthRange() {
    return this.#widthRange;
  }

  /**
   * Retrieves the style.
   * @return {Object.<string,*>} Style object.
   */
  get style() {
    return this.#style;
  }

  /**
   * Retrieves the width unit.
   * @return {string} CSS unit.
   */
  get widthUnit() {
    return this.#widthUnit;
  }
}
