// eslint-disable-next-line require-jsdoc
export default class CustomString {
  /**
   * Wrapped built-in string
   * @type {string}
   */
  #base;

  /**
   * Creates an instance of StringWrapper.
   * @param {any} [value] The value to wrap as string. Default ''.
   */
  constructor(value = '') {
    this.#base = String(value);
  }

  /**
   * Updates this string value (overwrite the current value).
   * @param {any} value The value to set.
   * @return {this}
   */
  set(value) {
    this.#base = String(value);
    return this;
  }

  /**
   * Prepend the given value.
   * @param {any} value The value to prepend.
   * @return {this}
   */
  prepend(value) {
    this.#base = String(value) + this.#base;
    return this;
  }

  /**
   * Prepends a value to a string based on the provided condition.
   * @param {boolean} condition The condition to evaluate.
   * @param {string} value1 The value to be prepend when the condition is met.
   * @param {string} [value2] If defined, it is prepended when the condition is
   * not met. Default undefined.
   * @return {this}
   */
  prependIf(condition, value1, value2) {
    if (condition) {
      return this.prepend(value1);
    }
    return value2 ? this.prepend(value2) : this;
  }

  /**
   * Append the given value.
   * @param {any} value The value to append.
   * @return {this}
   */
  append(value) {
    this.#base += String(value);
    return this;
  }

  /**
   * Appends a value to a string based on the provided condition.
   * @param {boolean} condition The condition to evaluate.
   * @param {string} value1 The value to be append when the condition is met.
   * @param {string} [value2] If defined it is append when the condition is
   * not met. Default undefined.
   * @return {this}
   */
  appendIf(condition, value1, value2) {
    if (condition) {
      return this.append(value1);
    }
    return value2 ? this.append(value2) : this;
  }

  /**
   * Retrieve a string representation of the object.
   * @return {string}
   */
  toString() {
    return this.#base;
  }

  /**
   * Encloses the string with the provided delimiter set.
   * @param {{opening: string, closing: string}} delimiterSet The delimiter set.
   * @return {this}
   */
  enclose(delimiterSet) {
    const { opening, closing = opening } = delimiterSet;
    this.#base = opening + this.#base + closing;
    return this;
  }

  /**
   * Encloses this string if the condition is met.
   * @param {boolean} condition
   * @param {{opening: string, closing: string}} delimiterSet1 The delimiter
   * set.
   * @param {{opening: string, closing: string}} [delimiterSet2] If defined it
   * is used as delimiter when the condition is not met.
   * @return {this}
   */
  encloseIf(condition, delimiterSet1, delimiterSet2) {
    if (condition) {
      return this.enclose(delimiterSet1);
    }
    return delimiterSet2 ? this.enclose(delimiterSet2) : this;
  }

  /**
   * Indicates if the string is already enclosed with the DelimiterSet values.
   * @param {{opening: string, closing: string}} delimiterSet The delimiter set.
   * @return {boolean}
   */
  isEnclosedIn(delimiterSet) {
    const { opening, closing } = delimiterSet;
    return this.#base.startsWith(opening) && this.#base.endsWith(closing);
  }

  /**
   * Checks if a string is empty.
   * @param {string} str The string to check.
   * @param {boolean} trim Indicates whether to trim the string before checking.
   * @return {boolean}
   */
  static isEmpty(str, trim = true) {
    if (trim) str = str.trim();
    return str.length === 0;
  }

  /**
   * Count pattern occurrences in string.
   * @param {string} str String in which count occurrences.
   * @param {RegExp|string} pattern Pattern to search.
   * @return {number}
   */
  static countOccurrences(str, pattern) {
    return String(str).split(pattern).length - 1;
  }

  /**
   * Escape special regex characters.
   * @param {string} str String in which scape special characters.
   * @return {string}
   */
  static escapeRegexCharacters(str) {
    return String(str).replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');
  }

  /**
   * Checks if string match pattern.
   * @param {string} str String in which check for matches.
   * @param {RegExp} pattern Pattern to search.
   * @return {boolean}
   */
  static isMatch(str, pattern) {
    return String(str).match(pattern) !== null;
  }

  /**
   * Format string.
   * @param {string} str String to format with placeholders.
   * @param {...*} args Values to substitute for placeholder based in position.
   * @return {string}
   * @example CustomString.format('Name: {0}, Age: {1}', 'Lee', 23) =>
   * 'Name: Lee, Age: 23'
   */
  static format(str, ...args) {
    return String(str).replace(/{(\d+)}/g, (match, capture) => args[capture]);
  }

  /**
   * Format string.
   * @param {string} str String to format with placeholder '%s'
   * @param {...*} args Values to format (substitute %s for argument).
   * @return {string}
   * @example CustomString.printf('Product %s, Price %s', 'Keyboard', '99.99')
   * => 'Product Keyboard, Price 99.99'
   */
  static sprintf(str, ...args) {
    let i = 0;
    return String(str).replace(/%s/g, () => args[i++]);
  }

  /**
   * Capitalize first string character.
   * @param {string} str String in which capitalize first character.
   * @return {string}
   */
  static firstLetterUpperCase(str) {
    return str[0].toUpperCase() + str.substring(1);
  }

  /**
   * Capitalize each word's first character.
   * @param {string} str String in which capitalize each word's first character.
   * @return {string}
   */
  static capitalizeEachWordStart(str) {
    return str.toLowerCase().replace(/(?:\b|_+)\w/g, (c) => c.toUpperCase());
  }
}
