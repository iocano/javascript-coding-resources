/**
 * Custom error class for when an HTMLElement is not found.
 */
export default class ElementNotFoundError extends Error {
  /**
   * Create an ElementNotFoundError instance.
   * @param {string} message Error message.
   */
  constructor(message) {
    super(message);
    this.name = 'ElementNotFoundError';
  }
}
