/**
 * Custom error class for when modal window is not open.
 */
export default class ModalWindowAlreadyClosedError extends Error {
  /**
   * Create a ModalWindowAlreadyClosedError instance.
   * @param {string} message Error message.
   */
  constructor(message) {
    super(message);
    this.name = 'ModalWindowAlreadyClosedError';
  }
}
