/**
 * Custom error class for when a HTMLElement is empty (has not children).
 */
export default class ElementEmptyError extends Error {
  /**
   * Create an ElementEmptyError instance.
   * @param {string} message Error message.
   */
  constructor(message) {
    super(message);
    this.name = 'ElementEmptyError';
  }
}
