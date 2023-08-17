/**
 * Represents a single-read storage for the value of type T that is deleted
 * after first read.
 * @template T
 */
export default class SingleReadStorage {
  /**
   * Store a single use value.
   * @type {T[]}
   */
  #container = [];

  /**
   * Create SingleReadStorage instance.
   * @param {T} [value] Value to set.
   */
  constructor(value = undefined) {
    if (value) this.#container.push(value);
  }

  /**
   * Retrieve the value.
   * @return {T}
   */
  get value() {
    if (this.#container.length === 0) {
      throw new ReferenceError('Value is not defined.');
    }
    return this.#container.pop();
  }

  /**
   * Check if storage has value.
   * @return {boolean}
   */
  get hasValue() {
    return this.#container.length === 1;
  }

  /**
   * Set the value.
   * @param {T} value Value to set.
   */
  set value(value) {
    if (this.#container.length === 1) {
      this.#container.pop();
    }

    this.#container.push(value);
  }
}
